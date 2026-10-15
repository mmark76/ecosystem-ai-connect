# Production Readiness Gate

For the selected `LOCAL_ONLY` architecture, this gate is not evidence that external production resources are absent. Classify each item as `APPLICABLE` or `NOT_APPLICABLE` in the production-readiness evidence. A `NOT_APPLICABLE` classification requires scope-based justification, an accountable owner, and a re-evaluation trigger before any `SHARED_INFRASTRUCTURE`, `DEPLOYED_SERVICE`, or consumer-application release; it does not weaken applicable security, privacy, maintenance, or governance controls.

- [ ] Production configuration is validated where a production deployment is in scope.
- [ ] Deployment is reproducible where a deployment is in scope.
- [ ] Environment separation is correct where multiple environments are in scope.
- [ ] Secrets and keys are managed securely.
- [ ] Database migrations are tested where a persistent database exists.
- [ ] Health checks exist where a deployed service exists.
- [ ] Monitoring and alerts are active where a deployed service exists.
- [ ] Security-relevant logs are available where a deployed service exists.
- [ ] Rollback is documented and tested where required.
- [ ] Backups are active where recoverable hosted state exists.
- [ ] Restore has been tested where recoverable hosted state exists.
- [ ] Incident ownership and procedures exist where a production service is operated.
- [ ] Runbooks are current where a production service is operated.
- [ ] Support and maintenance ownership are assigned.
- [ ] Known limitations are documented.
- [ ] Required legal, privacy, or operational approvals exist.

**Result:** PASS / FAIL / NOT APPLICABLE
