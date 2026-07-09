---
id: wu_ses_verification_integration
title: Զտիչ - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Զտիչ՝ wu_ses_verification_integration {#filter-wusesverificationintegration}

Զտիչ՝ թույլ է տալիս այլ կոդին տրամադրել SES ինտեգրման օբյեկտը։

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $integration | `object\|null` | SES ինտեգրման օբյեկտը, կամ null։ |

### Սկսած {#since}

- 2.2.0
### Աղբյուր {#source}

Սահմանված է [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731)-ում՝ 731-րդ տողում
