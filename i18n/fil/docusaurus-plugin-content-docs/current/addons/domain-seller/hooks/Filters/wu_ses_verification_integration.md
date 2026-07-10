---
id: wu_ses_verification_integration
title: Salain - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Filter: wu_ses_verification_integration {#filter-wusesverificationintegration}

Filter: Pinapayagan nito ang ibang code na magbigay ng SES integration object.

Kailangang ipatupad (implement) ng object na ibabalik ang mga sumusunod:
- `verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error`
- `check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error`
- `delete_identity(string $domain): true\|WP_Error`

## Mga Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $integration | `object\|null` | Ang SES integration object, o maaaring `null`. |

### Simula {#since}

- 2.2.0
### Pinagmulan {#source}

Defined in [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) at line 731
