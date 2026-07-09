---
id: wu_checkout_order_created
title: Kev nqis tes - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Kev ua: wu_checkout_order_created

Tua tom qab checkout order raug sib sau tiav tag.

Cov addon siv tau qhov no los tsim cov kev ua tswv cuab thib ob rau cov khoom uas muaj lub voj voog sau nqi ywj pheej.

## Cov parameter

| Npe | Hom | Kev piav qhia |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Lub object cart/order. |
| $customer | `\WP_Ultimo\Models\Customer` | Tus neeg siv khoom. |
| $membership | `\WP_Ultimo\Models\Membership` | Kev ua tswv cuab tseem ceeb. |
| $payment | `\WP_Ultimo\Models\Payment` | Qhov kev them nyiaj. |

### Txij thaum

- 2.5.0
### Qhov chaw

Tau txhais hauv [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) ntawm kab 891
