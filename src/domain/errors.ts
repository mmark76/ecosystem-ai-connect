export class CredentialNotFoundError extends Error {
  public constructor() {
    super('No OpenAI credential is connected for this user and consumer application.');
    this.name = 'CredentialNotFoundError';
  }
}

export class OpenAiRequestError extends Error {
  public constructor(public readonly status: number) {
    super(`OpenAI request failed with status ${status}.`);
    this.name = 'OpenAiRequestError';
  }
}

export class OpenAiTransportError extends Error {
  public constructor() {
    super('Unable to complete the OpenAI request.');
    this.name = 'OpenAiTransportError';
  }
}

export class OpenAiResponseFormatError extends Error {
  public constructor() {
    super('OpenAI returned a response without text output.');
    this.name = 'OpenAiResponseFormatError';
  }
}
