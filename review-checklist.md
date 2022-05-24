Hello {{ .reviewer }}, happy testing!
{{if .isdevops}}
## DevOps
### Workflows:
- [ ] it is documented.
- [ ] the steps are isolated. so that if a step failed the other steps should work.
- [ ] it is idempotent. so if we rerun it, we will get the same result.
- [ ] its output is shown in clear and obvious way.
- [ ] the whole workflow doesn't exceed 15 minutes.
### Deployment:
- [ ] setup the monitoring of the main metrics and main features.
- [ ] all the secrets and configs are exist.
- [ ] the deployment is working on development system, with almost the same setup as the prod.
### Databases:
- [ ] the capacity of the database is clearly determined.
- [ ] the database performance and capacity are monitored.
- [ ] the backup and restore mechanism are documented and automated if possible.
- [ ] regular data backup.
### Monitoring:
- [ ] the alerts have the proper severity.
- [ ] the alerts have an action for critical alerts, or a description for warning alerts.
- [ ] the alerts are in a friendly format.

{{ else }}
## Product features
**Bugs:**
- [ ] Is the bug properly fixed?
- [ ] Are the most common user flows related to the original feature still working as intended?

**Features:**

- [ ] Are all the user flows outlined in the design or original issue description working as intended?
- [ ] Does the implementation match the designs?
- [ ] There are no edge cases missed in the design and/or implementation?
- [ ] If the feature is not complete yet, is it properly disabled?

**Refactors:**

- [ ] Are the most common user flows related to the original feature still working as intended?

{{ end }}
