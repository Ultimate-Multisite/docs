---
id: wu_ses_verification_integration
title: Akayunguruzo - wu_ses_verification_integration
sidebar_label: wu_ses_verification_integration
_i18n_hash: 27c3b330dc77b62650dee7345dcec26c
---
# Muyunguruzi: wu_ses_verification_integration {#filter-wusesverificationintegration}

Muyunguruzi: yemerera indi code gutanga ikintu cy’ihuriro rya SES.

The returned object must implement: - verify_domain(string $domain): array\{dkim_tokens: string[]\}\|WP_Error - check_domain_verification(string $domain): array\{verified: bool\}\|WP_Error - delete_identity(string $domain): true\|WP_Error

## Ibipimo {#parameters}

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $integration | `object\|null` | Ikintu cy’ihuriro rya SES, cyangwa null. |

### Kuva {#since}

- 2.2.0
### Inkomoko {#source}

Bisobanuwe muri [`inc/class-ses-verification-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-ses-verification-manager.php#L731) ku murongo wa 731
