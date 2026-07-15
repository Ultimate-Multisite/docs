---
id: wu_ses_verification_integration
title: سۈزگۈچ - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# سۈزگۈچ: wu_ses_verification_integration

سۈزگۈچ: باشقا كودنىڭ SES بىرلەشتۈرۈش جىسىمىنى تەمىنلىشىگە يول قويىدۇ.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## پارامېتىرلار {#parameters}

| ئىسمى | تىپى | چۈشەندۈرۈشى |
|------|------|-------------|
| $integration | `object\|null` | SES بىرلەشتۈرۈش جىسىمى، ياكى null. |

### باشلاپ {#since}

- 2.2.0
### مەنبە {#source}

[`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) نىڭ 731-قۇرىدا ئېنىقلانغان.
