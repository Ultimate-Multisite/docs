---
id: wu_ses_verification_integration
title: פֿילטער - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# פֿילטער: wu_ses_verification_integration

פֿילטער: דערלויבט אַנדערן קאָד צו צושטעלן דעם SES אינטעגראַציע־אָביעקט.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## פּאַראַמעטערס

| נאָמען | טיפּ | באַשרײַבונג |
|------|------|-------------|
| $integration | `object\|null` | דער SES אינטעגראַציע־אָביעקט, אָדער null. |

### זינט

- 2.2.0
### מקור

דעפֿינירט אין [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) אין שורה 731
