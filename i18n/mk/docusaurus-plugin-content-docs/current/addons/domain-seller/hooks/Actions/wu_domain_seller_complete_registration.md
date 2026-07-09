---
id: wu_domain_seller_complete_registration
title: Дејство - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Дејство: wu_domain_seller_complete_registration

Се активира кога плаќање преминува во статус што треба да иницира регистрација на домен.

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Објектот на плаќањето. |
| $old_status | `string` | Претходниот статус на плаќањето пред преминот. |

### Од

- 2.0.0
### Извор

Дефинирано во [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) на линија 266
