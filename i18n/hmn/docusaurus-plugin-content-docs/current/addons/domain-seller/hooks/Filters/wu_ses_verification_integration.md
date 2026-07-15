---
id: wu_ses_verification_integration
title: Lim - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Lim: wu_ses_verification_integration

Lim: tso cai rau lwm code muab SES integration object.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Cov Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | SES integration object, lossis null. |

### Txij thaum {#since}

- 2.2.0
### Qhov chaw {#source}

Tau txhais hauv [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) ntawm kab 731
