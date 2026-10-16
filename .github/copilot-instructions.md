# Ecosystem AI Connect repository guidance

Keep changes within the approved headless-SDK scope. Do not introduce a dashboard, website, cloud backend, live provider integration, credential store, or package publication without explicit approval.

Treat Foundation material under `foundations/` as pinned, sanitized reference material. Preserve provenance and run the Foundation validator before modifying it. Never add credentials, populated configuration, private operational evidence, or token-like values.

For future provider work, preserve explicit user consent, per-user and per-application authorization boundaries, safe token handling, redacted logging, and provider-neutral public contracts. OpenAI is the approved initial direction; additional providers require separately approved work.
