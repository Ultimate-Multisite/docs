---
id: wu_domain_registration_completed
title: Действие - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Изпълнява се след успешно регистриране на домейн.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Плащането, което е инициирало регистрацията. |
| $registration_data | `array&lt;string,mixed&gt;` | Метаданни за регистрация (domain_name, provider_id, years, expiry_date и др.). |
| $result | `array&lt;string,mixed&gt;` | Суровият масив с резултати, върнат от регистратора. |

### От {#since}

- 2.0.0
### Източник {#source}

Дефиниран в [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) на линия 1204
