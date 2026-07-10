---
id: wu_domain_registration_completed
title: Isenzo - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Isenzo: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Sivuswa emva kokuba idomeyini ibhaliswe ngempumelelo.

## Iiparamitha {#parameters}

| Igama | Uhlobo | Inkcazo |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Intlawulo ebangele ubhaliso. |
| $registration_data | `array&lt;string,mixed&gt;` | Imetadata yobhaliso (domain_name, provider_id, years, expiry_date, njl.). |
| $result | `array&lt;string,mixed&gt;` | Uluhlu lweziphumo olungacocwanga olubuyiswe ngumregistrar. |

### Ukususela {#since}

- 2.0.0
### Umthombo {#source}

Ichazwe kwi [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) kumgca 1204
