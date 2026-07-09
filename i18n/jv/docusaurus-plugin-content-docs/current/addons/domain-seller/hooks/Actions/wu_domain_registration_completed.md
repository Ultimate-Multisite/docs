---
id: wu_domain_registration_completed
title: Aksi - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Mlaku sawisé sawijining domain kasil didaftar.

## Parameter

| Jeneng | Jinis | Katrangan |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Payment sing micu registration. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata registration (domain_name, provider_id, taun, expiry_date, lsp.). |
| $result | `array&lt;string,mixed&gt;` | Array asil mentah sing dibalekaké déning registrar. |

### Wiwit

- 2.0.0
### Sumber

Ditetepaké ing [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) ing baris 1204
