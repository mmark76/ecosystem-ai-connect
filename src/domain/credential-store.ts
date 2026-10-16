export interface CredentialReference {
  readonly userId: string;
  readonly consumerApplicationId: string;
}

export interface CredentialStore {
  set(reference: CredentialReference, secret: string): Promise<void>;
  get(reference: CredentialReference): Promise<string | undefined>;
  delete(reference: CredentialReference): Promise<boolean>;
}
