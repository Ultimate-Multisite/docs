---
id: wu_ses_verification_integration
title: فلتەر - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# فلتەر: wu_ses_verification_integration

فلتەر: ڕێگە بدات بە کۆدی تر بۆ دابینکردنی ئامرازی یەکخستنی SES.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## پارامێتەرەکان {#parameters}

| ناو | جۆر | وەسف |
|------|------|-------------|
| $integration | `object\|null` | ئامرازی یەکخستنی SES، یان null. |

### لە وەشانەوە {#since}

- 2.2.0
### سەرچاوە {#source}

پێناسەکراوە لە [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) لە دێڕی 731
