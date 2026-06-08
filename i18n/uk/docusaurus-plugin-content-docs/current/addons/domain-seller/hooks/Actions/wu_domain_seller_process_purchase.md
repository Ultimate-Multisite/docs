---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Дія: wu_domain_seller_process_purchase

Виконується, коли обробляється купівля домену після завершення оформлення замовлення.

## Параметри

| Ім'я | Тип | Опис |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Об'єкт платежу. |
| $checkout_data | `array<string,mixed>` | Повні дані оформлення замовлення з форми реєстрації. |

### З версії

- 2.0.0
### Джерело

Визначено в [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) на рядку 246
