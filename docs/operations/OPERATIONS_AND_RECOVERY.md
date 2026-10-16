# Operations and Recovery

The selected `LOCAL_ONLY` profile means this repository does not implement a deployed service, on-call operation, hosted database, backup, or rollback target. External infrastructure state has not been verified, so this record makes no claim that external production resources do not exist. No external infrastructure modification is authorized by the current scope.

For a future SDK release, maintainers must define supported platform/version policy, package release/rollback procedure, vulnerability response, dependency maintenance, security-contact route, token-revocation behavior, user recovery from denied/expired authorization, and non-sensitive diagnostic collection. Any hosted component requires a new infrastructure profile and deployment/recovery plan.
