---
id: wu_ses_verification_integration
title: Tātari - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Tātari: wu_ses_verification_integration

Tātari: tukua ētahi atu waehere ki te whakarato i te ahanoa integration SES.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Ngā Tawhā {#parameters}

| Ingoa | Momo | Whakaahuatanga |
|------|------|-------------|
| $integration | `object\|null` | Te ahanoa integration SES, ko null rānei. |

### Mai i {#since}

- 2.2.0
### Pūtake {#source}

Kua tautuhia ki [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) i te rārangi 731
