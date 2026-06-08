---
id: wu_domain_seller_process_purchase
title: Дзеянне - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Выклікаецца, калі адбываецца праходжанне пакупкі домена пасля завяршэння карыстальніка.

## Параметры

| Назва | Тып | Апісан |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Объект плацമെнта. |
| $checkout_data | `array&lt;string,mixed&gt;` | Поўныя дадзеныя карыстальніка з формы рэгістрацыі. |

### З версіі

- 2.0.0
### Вынік

Вызначаны ў [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) на 246-й паўніне.
