---
id: wu_ses_verification_integration
title: ფილტრი - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# ფილტრი: wu_ses_verification_integration

ფილტრი: სხვა კოდს აძლევს SES ინტეგრაციის ობიექტის მიწოდების საშუალებას.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## პარამეტრები

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $integration | `object\|null` | SES ინტეგრაციის ობიექტი, ან null. |

### ვერსიიდან

- 2.2.0
### წყარო

განსაზღვრულია [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731)-ში, ხაზზე 731
