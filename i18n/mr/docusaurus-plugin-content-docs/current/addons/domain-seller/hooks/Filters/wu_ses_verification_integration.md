---
id: wu_ses_verification_integration
title: फिल्टर - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# फिल्टर: wu_ses_verification_integration

फिल्टर: इतर कोडला SES इंटिग्रेशन ऑब्जेक्ट (SES integration object) पुरवण्याची परवानगी देतो.

परत आलेला ऑब्जेक्ट खालील गोष्टी लागू (implement) करणारा असावा: - `verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error` - `check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error` - `delete_identity(string $domain): true\|WP_Error`

## पॅरामीटर्स {#parameters}

| नाव | प्रकार | वर्णन |
|------|------|-------------|
| $integration | `object\|null` | SES इंटिग्रेशन ऑब्जेक्ट, किंवा null. |

### पासून {#since}

- 2.2.0
### स्रोत {#source}

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) मध्ये लाइन 731 वर परिभाषित केले आहे
