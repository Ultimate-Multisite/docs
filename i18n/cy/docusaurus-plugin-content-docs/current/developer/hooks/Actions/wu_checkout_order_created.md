---
id: wu_checkout_order_created
title: Gweithred - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Gweithred: wu_checkout_order_created

Yn tanio ar ôl i'r archeb dalu gael ei chydosod yn llawn.

Gall ychwanegion ddefnyddio hyn i greu aelodaethau eilaidd ar gyfer cynhyrchion â chylchoedd bilio annibynnol.

## Paramedrau

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Gwrthrych y cart/archeb. |
| $customer | `\WP_Ultimo\Models\Customer` | Y cwsmer. |
| $membership | `\WP_Ultimo\Models\Membership` | Y brif aelodaeth. |
| $payment | `\WP_Ultimo\Models\Payment` | Y taliad. |

### Ers

- 2.5.0
### Ffynhonnell

Diffinnir yn [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) ar linell 891
