import { AsyncEntry } from '@napi-rs/keyring';

import type { CredentialReference, CredentialStore } from '../domain/credential-store.js';

const DEFAULT_SERVICE_NAME = 'com.markellos.ecosystem-ai-connect.openai';

export class NativeCredentialStore implements CredentialStore {
  public constructor(private readonly serviceName = DEFAULT_SERVICE_NAME) {}

  public async set(reference: CredentialReference, secret: string): Promise<void> {
    await this.entryFor(reference).setPassword(secret);
  }

  public async get(reference: CredentialReference): Promise<string | undefined> {
    return this.entryFor(reference).getPassword();
  }

  public async delete(reference: CredentialReference): Promise<boolean> {
    return this.entryFor(reference).deletePassword();
  }

  private entryFor(reference: CredentialReference): AsyncEntry {
    return new AsyncEntry(this.serviceName, encodeReference(reference));
  }
}

function encodeReference(reference: CredentialReference): string {
  return Buffer.from(
    JSON.stringify({
      consumerApplicationId: reference.consumerApplicationId,
      userId: reference.userId,
    }),
    'utf8',
  ).toString('base64url');
}
