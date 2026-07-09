---
id: wu_domain_seller_process_purchase
title: Дејство - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Се активира кога купувањето домен се обработува по завршувањето на checkout.

## Параметри

| Име | Тип | Опис |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Објектот за плаќање. |
| $checkout_data | `array&lt;string,mixed&gt;` | Целосни податоци за checkout од формуларот за регистрација. |

### Од верзија

- 2.0.0
### Извор

Дефинирано во [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) на линија 246
