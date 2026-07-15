---
id: wu_ses_verification_integration
title: Filter - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

Filter: Başqa kodun SES inteqrasiya obyektini təmin etməsinə icazə verir.

Qaytarılan obyektin aşağıdakıları tətbiq etməsi (implement etməsi) lazımdır:
- `verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error`
- `check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error`
- `delete_identity(string $domain): true\|WP_Error`

## Parametrlər {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | SES inteqrasiya obyekti və ya `null`. |

### Nə vaxtdan {#since}

- 2.2.0
### Mənbə {#source}

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) faylında 731-ci sətirdə təyin edilmişdir.
