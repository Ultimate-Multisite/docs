---
id: wu_ses_verification_integration
title: फिल्टर - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration {#filter-wusesverificationintegration}

Filter: अरू code लाई SES integration object उपलब्ध गराउन अनुमति दिनुहोस्।

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## प्यारामिटरहरू {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | SES integration object, वा null। |

### देखि {#since}

- 2.2.0
### स्रोत {#source}

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) मा line 731 मा परिभाषित गरिएको
