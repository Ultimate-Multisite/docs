---
id: wu_ses_verification_integration
title: फ़िल्टर - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# फ़िल्टर: wu_ses_verification_integration {#filter-wusesverificationintegration}

फ़िल्टर: अन्य कोड को SES इंटीग्रेशन ऑब्जेक्ट प्रदान करने की अनुमति देता है।

रिटर्न किए गए ऑब्जेक्ट में ये मेथड्स लागू होने चाहिए:
*   `verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error`
*   `check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error`
*   `delete_identity(string $domain): true\|WP_Error`

## पैरामीटर्स {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $integration | `object\|null` | SES इंटीग्रेशन ऑब्जेक्ट, या नल। |

### कब से {#since}

- 2.2.0
### स्रोत {#source}

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) में लाइन 731 पर परिभाषित है
