---
id: wu_domain_seller_complete_registration
title: Радња - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

Покреће се када плаћање пређе у статус који треба да покрене регистрацију домена.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Објекат плаћања. |
| $old_status | `string` | Претходни статус плаћања пре прелаза. |

### Од верзије

- 2.0.0
### Извор

Дефинисано у [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) у реду 266
