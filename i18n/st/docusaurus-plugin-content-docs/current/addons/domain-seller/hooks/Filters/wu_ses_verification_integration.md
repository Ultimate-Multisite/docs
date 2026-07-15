---
id: wu_ses_verification_integration
title: Sefe - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Sefe: wu_ses_verification_integration

Sefe: dumella code e nngwe ho fana ka ntho ya kopanyo ya SES.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Dipharametha {#parameters}

| Lebitso | Mofuta | Tlhaloso |
|------|------|-------------|
| $integration | `object\|null` | Ntho ya kopanyo ya SES, kapa null. |

### Ho tloha {#since}

- 2.2.0
### Mohlodi {#source}

E hlalositswe ho [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) moleng wa 731
