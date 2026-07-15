---
id: wu_domain_seller_complete_registration
title: Дія - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

Виконується, коли платіж переходить у статус, який має ініціювати реєстрацію домену.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Об'єкт платіжу. |
| $old_status | `string` | Попередній статус платіжу перед переходом. |

### Since {#since}

- 2.0.0
### Source {#source}

Визначено у [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) на рядку 266
