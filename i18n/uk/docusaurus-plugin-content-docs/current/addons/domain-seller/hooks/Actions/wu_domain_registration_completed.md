---
id: wu_domain_registration_completed
title: Action - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Цей хук спрацьовує після успішної реєстрації домену.

## Параметри {#parameters}

| Name | Type | Опис |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Платіж, який спричинив реєстрацію. |
| $registration_data | `array<string,mixed>` | Метадані реєстрації (domain_name, provider_id, years, expiry_date тощо). |
| $result | `array<string,mixed>` | Сирий масив результатів, повернений реєстратором. |

### З версії {#since}

- 2.0.0
### Джерело {#source}

Визначено у [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) на рядку 1204
