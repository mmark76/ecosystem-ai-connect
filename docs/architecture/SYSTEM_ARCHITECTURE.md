# System Architecture

## Current state

The repository contains a local OpenAI connector v1 API. It has no configured credential and no live provider request has been authorized or executed.

## Intended architecture

| Boundary | Responsibility | Status |
|---|---|---|
| Consumer application | UI, local process, user consent, application authorization, and its own data lifecycle. | Consumer-owned; not implemented here. |
| SDK public contract | `OpenAiConnector` inputs, text output, non-sensitive error model, and user/consumer isolation rules. | Implemented; compatibility and release verification pending. |
| Provider adapter | OpenAI Responses text protocol behind the SDK contract. | Implemented for stateless text requests only. |
| Local secure storage integration | `NativeCredentialStore` uses the host keyring through `@napi-rs/keyring`; no central service, shared credential store, plaintext storage, or plain-file fallback. | Implemented; native round-trip validation on every supported OS remains pending. |

Dependencies flow from consumer application to SDK contract to provider adapter. Provider-specific types, credentials, and transport behavior must not leak into consumer domain code. A future adapter may call an external provider, but the SDK does not host an independent service.

## Trust boundaries

- An OpenAI project API key is scoped to the user, consumer application, and local process; it is not automatically transferable to another application.
- Local files, environment variables, IPC, logs, and child processes are untrusted or scoped according to the future platform design.
- Provider responses and authorization callbacks are external input and require validation.

## Failure posture

No credential may be logged, returned in an error, or written to source control. The connector fails closed for missing credentials, non-success provider responses, malformed responses, timeouts, cancellation, and transport failures with non-sensitive errors. Retry, account/billing, live-key revocation, and recovery rules remain future decisions.
