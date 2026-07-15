---
id: wu_ses_verification_integration
title: តម្រង - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# តម្រង: wu_ses_verification_integration

តម្រង: អនុញ្ញាតឱ្យកូដផ្សេងផ្តល់វត្ថុ SES integration។

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $integration | `object\|null` | វត្ថុ SES integration ឬ null។ |

### ចាប់ពី {#since}

- 2.2.0
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) នៅបន្ទាត់ 731
