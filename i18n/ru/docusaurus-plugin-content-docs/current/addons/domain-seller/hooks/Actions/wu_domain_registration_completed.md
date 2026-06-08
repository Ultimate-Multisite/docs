---
id: wu_domain_registration_completed
title: Действие - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Срабатывает после успешной регистрации домена.

## Параметры

| Name | Type | Описание |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Платеж, который инициировал регистрацию. |
| $registration_data | `array&lt;string,mixed&gt;` | Метаданные регистрации (domain_name, provider_id, years, expiry_date и т. д.). |
| $result | `array&lt;string,mixed&gt;` | Исходный массив результатов, возвращенный регистратором. |

### Since

- 2.0.0
### Source

Определен в [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) в строке 1204
