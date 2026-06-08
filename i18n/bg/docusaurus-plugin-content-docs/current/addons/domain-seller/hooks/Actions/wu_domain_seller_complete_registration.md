---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

Изпълнява се, когато плащането преминава в състояние, което трябва да активира регистрацията на домейн.

## Параметри

| Име | Тип | Описание |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Обектът на плащането. |
| $old_status | `string` | Повишеното състояние на плащането преди преминаването. |

### От

- 2.0.0
### Източник

Дефиниран в [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) на ред 266
