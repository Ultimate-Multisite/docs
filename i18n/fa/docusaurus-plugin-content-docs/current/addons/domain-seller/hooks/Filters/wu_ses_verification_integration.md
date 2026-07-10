---
id: wu_ses_verification_integration
title: فیلتر - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# فیلتر: wu_ses_verification_integration {#filter-wusesverificationintegration}

فیلتر: به کدهای دیگر اجازه می‌دهد تا آبجکت یکپارچه‌سازی SES را فراهم کنند.

آبجکتی که برگردانده می‌شود باید متدهای زیر را پیاده‌سازی کند:
- `verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error`
- `check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error`
- `delete_identity(string $domain): true\|WP_Error`

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $integration | `object\|null` | آبجکت یکپارچه‌سازی SES، یا مقدار null. |

### از نسخه {#since}

- 2.2.0
### منبع {#source}

در [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) در خط ۷۳۱ تعریف شده است.
