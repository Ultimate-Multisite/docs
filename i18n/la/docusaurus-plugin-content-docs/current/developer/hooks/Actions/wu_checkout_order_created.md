---
id: wu_checkout_order_created
title: Actio - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Actio: wu_checkout_order_created

Excitatur postquam ordo emptionis plene compositus est.

Additamenta hoc uti possunt ad societates secundarias creandas pro productis cum cyclis exactionis independentibus.

## Parametra

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Obiectum cart/ordinis. |
| $customer | `\WP_Ultimo\Models\Customer` | Emptor. |
| $membership | `\WP_Ultimo\Models\Membership` | Societas primaria. |
| $payment | `\WP_Ultimo\Models\Payment` | Solutio. |

### Ex

- 2.5.0
### Fons

Definitum in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) ad lineam 891
