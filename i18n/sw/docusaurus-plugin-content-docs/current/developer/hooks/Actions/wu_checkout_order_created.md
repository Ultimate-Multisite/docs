---
id: wu_checkout_order_created
title: Kitendo - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Inatokea baada ya agizo la malipo kukamilika kabisa.

Addons zinaweza kutumia hili kuunda ushiriki wa pili (secondary memberships) kwa bidhaa zenye mzunguko wa malipo huru.

## Vigezo (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Kikundi cha bidhaa/kikundi cha agizo (cart/order object). |
| $customer | `\WP_Ultimo\Models\Customer` | Mteja (customer). |
| $membership | `\WP_Ultimo\Models\Membership` | Ushiriki mkuu (primary membership). |
| $payment | `\WP_Ultimo\Models\Payment` | Malipo (payment). |

### Tangu (Since)

- 2.5.0
### Chanzo (Source)

Imefafanuliwa katika [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) kwenye mstari wa 891
