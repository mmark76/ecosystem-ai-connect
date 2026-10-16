# System Architecture

## Current state

No runtime SDK modules or provider adapters exist yet. This release establishes the intended boundary and does not expose an API or execute provider requests.

## Intended architecture

| Boundary | Responsibility | Status |
|---|---|---|
| Consumer application | UI, local process, user consent, application authorization, and its own data lifecycle. | Consumer-owned; not implemented here. |
| SDK public contract | Stable provider-neutral interfaces, error model, configuration contract, and consumer isolation rules. | Planned. |
| Provider adapter | Provider-specific authorization and request protocol behind the SDK contract. | Planned; no provider is selected or approved. |
| Local secure storage integration | Native OS secure storage only: Windows Credential Manager/DPAPI, macOS Keychain, or Linux Secret Service; no central service, shared credential store, plaintext storage, or plain-file fallback. | Planned; implementation and platform-version validation required. |

Dependencies flow from consumer application to SDK contract to provider adapter. Provider-specific types, credentials, and transport behavior must not leak into consumer domain code. A future adapter may call an external provider, but the SDK does not host an independent service.

## Trust boundaries

- A user authorization is scoped to the user, consumer application, provider client registration, requested scopes, and local process; it is not automatically transferable to another application.
- Local files, environment variables, IPC, logs, and child processes are untrusted or scoped according to the future platform design.
- Provider responses and authorization callbacks are external input and require validation.

## Failure posture

No credential may be logged, returned in an error, or written to source control. Provider unavailability, denied consent, invalid state, expired tokens, and rate/usage limits must fail closed with actionable, non-sensitive errors. Exact retry and recovery rules require implementation approval.
