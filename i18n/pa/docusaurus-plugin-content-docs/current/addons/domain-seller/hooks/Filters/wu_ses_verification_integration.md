---
id: wu_ses_verification_integration
title: Filter - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration

Filter: دوسرے کوڈ کو SES انٹیگریشن آبجیکٹ فراہم کرنے کی اجازت دیتا ہے۔

واپس کیا گیا آبجیکٹ درج ذیل فنکشنز لاگو کرنا ضروری ہے:
- verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error
- check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error
- delete_identity(string $domain): true\|WP_Error

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | SES انٹیگریشن آبجیکٹ، یا null۔ |

### Since

- 2.2.0
### Source

Defined in [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) at line 731
