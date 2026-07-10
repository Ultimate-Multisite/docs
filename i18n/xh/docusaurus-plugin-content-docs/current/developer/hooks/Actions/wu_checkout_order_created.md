---
id: wu_checkout_order_created
title: Isenzo - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Isebenza emva kokuba i-odolo ye-checkout idityaniswe ngokupheleleyo.

Ii-addon zingasebenzisa oku ukudala membership ezongezelelweyo zeemveliso ezinemijikelo yokuhlawula ezimeleyo.

## Iiparamitha {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Into ye-cart/odolo. |
| $customer | `\WP_Ultimo\Models\Customer` | Umthengi. |
| $membership | `\WP_Ultimo\Models\Membership` | I-membership ephambili. |
| $payment | `\WP_Ultimo\Models\Payment` | Intlawulo. |

### Ukusukela {#since}

- 2.5.0
### Umthombo {#source}

Ichazwe ku-[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) kumgca 891
