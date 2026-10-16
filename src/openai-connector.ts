import type { CredentialReference, CredentialStore } from './domain/credential-store.js';
import {
  CredentialNotFoundError,
  OpenAiRequestError,
  OpenAiResponseFormatError,
  OpenAiTransportError,
} from './domain/errors.js';
import { NativeCredentialStore } from './infrastructure/native-credential-store.js';

const OPENAI_RESPONSES_URL = 'https://api.openai.com/v1/responses';
const DEFAULT_REQUEST_TIMEOUT_MS = 30_000;

export interface OpenAiConnectorOptions {
  readonly credentialStore?: CredentialStore;
  readonly fetch?: typeof globalThis.fetch;
  readonly requestTimeoutMs?: number;
}

export interface ConnectOpenAiRequest extends CredentialReference {
  readonly apiKey: string;
}

export interface GenerateTextRequest extends CredentialReference {
  readonly input: string;
  readonly model: string;
  readonly signal?: AbortSignal;
}

export interface GenerateTextResult {
  readonly text: string;
}

/**
 * A local, headless OpenAI Responses API adapter.
 *
 * It persists only the API key in the operating system's native credential
 * store. Prompts and responses are neither persisted locally nor requested for
 * later retrieval from the Responses API.
 */
export class OpenAiConnector {
  private readonly credentialStore: CredentialStore;
  private readonly fetchImpl: typeof globalThis.fetch;
  private readonly requestTimeoutMs: number;

  public constructor(options: OpenAiConnectorOptions = {}) {
    this.credentialStore = options.credentialStore ?? new NativeCredentialStore();
    this.fetchImpl = options.fetch ?? globalThis.fetch;
    this.requestTimeoutMs = options.requestTimeoutMs ?? DEFAULT_REQUEST_TIMEOUT_MS;

    if (!Number.isInteger(this.requestTimeoutMs) || this.requestTimeoutMs <= 0) {
      throw new TypeError('requestTimeoutMs must be a positive integer.');
    }
  }

  /** Stores a user-owned, non-administrative OpenAI project API key. */
  public async connect(request: ConnectOpenAiRequest): Promise<void> {
    const reference = validatedReference(request);
    const apiKey = requiredText(request.apiKey, 'apiKey');

    if (/\r|\n/.test(apiKey)) {
      throw new TypeError('apiKey must not contain line breaks.');
    }

    await this.credentialStore.set(reference, apiKey);
  }

  /** Removes the local credential; it does not revoke the key at OpenAI. */
  public async disconnect(reference: CredentialReference): Promise<boolean> {
    return this.credentialStore.delete(validatedReference(reference));
  }

  /**
   * Creates one stateless text response. No conversation, tools, background
   * mode, or response storage is enabled by this v1 connector.
   */
  public async generateText(request: GenerateTextRequest): Promise<GenerateTextResult> {
    const reference = validatedReference(request);
    const apiKey = await this.credentialStore.get(reference);

    if (!apiKey) {
      throw new CredentialNotFoundError();
    }

    const input = requiredText(request.input, 'input');
    const model = requiredText(request.model, 'model');
    const signal = request.signal
      ? AbortSignal.any([request.signal, AbortSignal.timeout(this.requestTimeoutMs)])
      : AbortSignal.timeout(this.requestTimeoutMs);

    let response: Response;
    try {
      response = await this.fetchImpl(OPENAI_RESPONSES_URL, {
        body: JSON.stringify({
          input,
          model,
          store: false,
          stream: false,
        }),
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
        signal,
      });
    } catch {
      throw new OpenAiTransportError();
    }

    if (!response.ok) {
      throw new OpenAiRequestError(response.status);
    }

    let payload: unknown;
    try {
      payload = await response.json();
    } catch {
      throw new OpenAiResponseFormatError();
    }

    const text = extractText(payload);
    if (!text) {
      throw new OpenAiResponseFormatError();
    }

    return { text };
  }
}

function validatedReference(reference: CredentialReference): CredentialReference {
  return {
    consumerApplicationId: requiredText(reference.consumerApplicationId, 'consumerApplicationId'),
    userId: requiredText(reference.userId, 'userId'),
  };
}

function requiredText(value: string, fieldName: string): string {
  const normalized = value.trim();
  if (!normalized) {
    throw new TypeError(`${fieldName} must not be empty.`);
  }

  return normalized;
}

function extractText(payload: unknown): string | undefined {
  if (!isRecord(payload) || !Array.isArray(payload.output)) {
    return undefined;
  }

  const text = payload.output
    .filter(isRecord)
    .flatMap((output) => (Array.isArray(output.content) ? output.content : []))
    .filter(isRecord)
    .filter((content) => content.type === 'output_text' && typeof content.text === 'string')
    .map((content) => content.text)
    .join('');

  return text || undefined;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}
