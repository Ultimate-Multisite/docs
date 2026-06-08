---
id: wu_domain_seller_complete_registration
title: Дзеянне - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Action: wu_domain_seller_complete_registration

Выклікаецца, калі плацёж пераходзіць у статус, які павінен выклікаць рэгістрацыю домену.

## Паметрыкі

| Назва | Тып | Апісан |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Об'ект плацёжу. |
| $old_status | `string` | Папярэдны статус плацёжу перад пераходам. |

### З

- 2.0.0
### Выкідзенне

Вызначаны ў [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) на 266-й пакульцы.
