---
id: wu_checkout_order_created
title: Радња - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Покреће се након што је поруџбина за checkout потпуно састављена.

Додаци могу ово да користе за креирање секундарних чланстава за производе са независним циклусима наплате.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Објекат корпе/поруџбине. |
| $customer | `\WP_Ultimo\Models\Customer` | Клијент. |
| $membership | `\WP_Ultimo\Models\Membership` | Примарно чланство. |
| $payment | `\WP_Ultimo\Models\Payment` | Плаћање. |

### Од верзије {#since}

- 2.5.0
### Извор {#source}

Дефинисано у [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) у реду 891
