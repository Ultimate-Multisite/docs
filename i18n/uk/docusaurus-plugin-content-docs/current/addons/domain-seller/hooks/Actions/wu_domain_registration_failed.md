---
id: wu_domain_registration_failed
title: Дія - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

Виконується після того, як спроба реєстрації домену завершується невдачею.

## Параметри {#parameters}

| Name | Type | Опис |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Платіж, який ініціював реєстрацію. |
| $registration_data | `array&lt;string,mixed&gt;` | Метадані реєстрації, які включають статус=невдало та повідомлення про помилку. |
| $error_message | `string` | Зрозуміле для людини повідомлення про помилку від реєстратора. |

### З версії {#since}

- 2.0.0
### Джерело {#source}

Визначено у [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) на рядку 1250
