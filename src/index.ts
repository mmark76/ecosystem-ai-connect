export type { CredentialReference, CredentialStore } from './domain/credential-store.js';
export {
  CredentialNotFoundError,
  OpenAiRequestError,
  OpenAiResponseFormatError,
  OpenAiTransportError,
} from './domain/errors.js';
export { NativeCredentialStore } from './infrastructure/native-credential-store.js';
export {
  OpenAiConnector,
  type ConnectOpenAiRequest,
  type GenerateTextRequest,
  type GenerateTextResult,
  type OpenAiConnectorOptions,
} from './openai-connector.js';
