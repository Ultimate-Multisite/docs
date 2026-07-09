---
id: wu_domain_registration_completed
title: Aksyon - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Aksyon: wu_domain_registration_completed

Moandar human malampusong narehistro ang usa ka domain.

## Mga Parameter

| Ngalan | Tipo | Deskripsyon |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ang payment nga nakapahinabo sa registration. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata sa registration (domain_name, provider_id, years, expiry_date, ug uban pa). |
| $result | `array&lt;string,mixed&gt;` | Hilaw nga result array nga gibalik sa registrar. |

### Sukad

- 2.0.0
### Tinubdan

Gidefinir sa [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) sa linya 1204
