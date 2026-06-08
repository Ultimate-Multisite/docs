---
id: wu_ses_verification_integration
title: Filter - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

Filter: Ermöglicht es anderem Code, das SES-Integrationsobjekt bereitzustellen.

Das zurückgegebene Objekt muss folgende Methoden implementieren:
- `verify_domain(string $domain): array{dkim_tokens: string[]}\|WP_Error`
- `check_domain_verification(string $domain): array{verified: bool}\|WP_Error`
- `delete_identity(string $domain): true\|WP_Error`

## Parameter

| Name | Typ | Beschreibung |
|------|------|-------------|
| $integration | `object\|null` | Das SES-Integrationsobjekt oder null. |

### Seit

- 2.2.0
### Quelle

Definiert in [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) in Zeile 731
