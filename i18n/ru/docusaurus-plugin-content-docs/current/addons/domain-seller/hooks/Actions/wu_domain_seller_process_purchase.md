---
id: wu_domain_seller_process_purchase
title: Действие - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

Срабатывает, когда обрабатывается покупка домена после завершения оформления заказа.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Объект платежа. |
| $checkout_data | `array&lt;string,mixed&gt;` | Полные данные оформления заказа из формы регистрации. |

### Начиная с

- 2.0.0
### Источник

Определен в [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) в строке 246
