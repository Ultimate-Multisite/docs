---
id: wu_checkout_order_created
title: Гамәл - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Checkout заказы тулысынча җыелып беткәч эшли.

Аддоннар моны бәйсез түләү цикллары булган продуктлар өчен икенчел әгъзалыклар булдыруда куллана ала.

## Параметрлар

| Name | Type | Тасвирлама |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Кәрзин/заказ объекты. |
| $customer | `\WP_Ultimo\Models\Customer` | Клиент. |
| $membership | `\WP_Ultimo\Models\Membership` | Төп әгъзалык. |
| $payment | `\WP_Ultimo\Models\Payment` | Түләү. |

### Бирле

- 2.5.0
### Чыганак

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) эчендә 891 нче юлда билгеләнгән
