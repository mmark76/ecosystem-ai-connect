# Data Plan

## Current state

No runtime data is collected, stored, transmitted, or processed by this repository baseline.

## Planned data boundary

Future implementation may handle authorization transaction state, provider identity metadata, access/refresh tokens if applicable, and minimal local configuration. The owner-approved baseline permits only the minimum credentials and token metadata necessary for an approved integration, held in native OS secure storage: Windows Credential Manager/DPAPI, macOS Keychain, or Linux Secret Service. Plaintext storage and a plain-file fallback are prohibited unless separately approved. Credentials and tokens must never be committed or stored in a shared central service by default.

Provider request and response data belongs to the authorized consumer workflow and must not be retained by this SDK unless a separately approved purpose, retention, and deletion policy exists. Prompts, responses, and analytics are not retained by default. Diagnostics must redact tokens, secrets, and personal data. An approved implementation must support credential deletion on disconnect or revocation and a user-requested local-data cleanup path.
