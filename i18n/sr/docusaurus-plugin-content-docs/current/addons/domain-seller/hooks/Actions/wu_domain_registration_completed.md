---
id: wu_domain_registration_completed
title: Акција - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Покреће се након што је домен успешно регистрован.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Плаћање које је покренуло регистрацију. |
| $registration_data | `array&lt;string,mixed&gt;` | Метаподаци регистрације (domain_name, provider_id, years, expiry_date итд.). |
| $result | `array&lt;string,mixed&gt;` | Сирови низ резултата који је вратио registrar. |

### Од {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) на линији 1204
