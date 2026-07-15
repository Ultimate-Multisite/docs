---
id: wu_checkout_order_created
title: Chochitika - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Chochita: wu_checkout_order_created

Imayambitsidwa pambuyo poti oda yomaliza kugula yakonzedwa kwathunthu.

Addon angagwiritse ntchito izi kupanga ma membership achiwiri a zinthu zomwe zili ndi ma billing cycle odziyimira pawokha.

## Magawo {#parameters}

| Dzina | Mtundu | Kufotokozera |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Chinthu cha cart/oda. |
| $customer | `\WP_Ultimo\Models\Customer` | Kasitomala. |
| $membership | `\WP_Ultimo\Models\Membership` | Membership yayikulu. |
| $payment | `\WP_Ultimo\Models\Payment` | Malipiro. |

### Kuyambira {#since}

- 2.5.0
### Gwero {#source}

Yafotokozedwa mu [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) pa mzere 891
