---
id: wu_ses_verification_integration
title: Filter - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

Filter: laat andere code het SES-integratieobject verstrekken.

Het geretourneerde object moet de volgende methoden implementeren:
- `verify_domain(string $domain): array{dkim_tokens: string[]}\|WP_Error`
- `check_domain_verification(string $domain): array{verified: bool}\|WP_Error`
- `delete_identity(string $domain): true\|WP_Error`

## Parameters

| Naam | Type | Beschrijving |
|------|------|-------------|
| $integration | `object\|null` | Het SES-integratieobject, of null. |

### Sinds

- 2.2.0
### Bron

Geïndefinieerd in [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) op regel 731
