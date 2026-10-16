# Data Plan

## Current state

The connector stores only a user-owned OpenAI project API key in native OS secure storage. When a consumer invokes `generateText`, the supplied text and selected model are transmitted to OpenAI; the connector does not persist either locally.

## Planned data boundary

Future implementation may handle authorization transaction state, provider identity metadata, access/refresh tokens if applicable, and minimal local configuration. The owner-approved baseline permits only the minimum credentials and token metadata necessary for an approved integration, held in native OS secure storage: Windows Credential Manager/DPAPI, macOS Keychain, or Linux Secret Service. Plaintext storage and a plain-file fallback are prohibited unless separately approved. Credentials and tokens must never be committed or stored in a shared central service by default.

Provider request and response data belongs to the authorized consumer workflow and is not retained by this SDK. The OpenAI v1 adapter sets `store: false` and does not create a conversation, but this is not a claim of a provider-wide zero-retention contract; provider-specific retention and account terms remain `NEEDS_DECISION`. Prompts, responses, and analytics are not retained locally. Diagnostics must redact tokens, secrets, and personal data. `disconnect` deletes the local credential; the user must revoke an OpenAI key through OpenAI separately because v1 never uses an administrative credential.
