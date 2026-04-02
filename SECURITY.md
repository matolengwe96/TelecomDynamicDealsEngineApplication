# Security Policy

## Supported Scope

This repository is under active development. Security fixes are applied on `main` and released through normal phase-based milestones.

## Reporting a Vulnerability

Please do not open public issues for security vulnerabilities.

Report security concerns by emailing: security@dde.local

Include:

- Summary and impact
- Steps to reproduce
- Affected service(s)
- Suggested mitigation if known

## Response Targets

- Initial acknowledgement: within 2 business days
- Triage decision: within 5 business days
- Fix plan: based on severity and exploitability

## Secrets Handling

- Never commit secrets to source control.
- Use environment files and secret stores for runtime credentials.
- Rotate exposed credentials immediately.
