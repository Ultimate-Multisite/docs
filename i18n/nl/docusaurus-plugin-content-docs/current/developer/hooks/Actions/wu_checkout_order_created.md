---
id: wu_checkout_order_created
title: Actie - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Wordt geactiveerd nadat de afrekenorder volledig is samengesteld.

Addons kunnen dit gebruiken om secundaire lidmaatschappen te creëren voor producten met onafhankelijke factureringscycli.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Het winkelwagen/ordervoorwerp. |
| $customer | `\WP_Ultimo\Models\Customer` | De klant. |
| $membership | `\WP_Ultimo\Models\Membership` | Het primaire lidmaatschap. |
| $payment | `\WP_Ultimo\Models\Payment` | De betaling. |

### Since

- 2.5.0
### Source

Gedefinieerd in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) op regel 891
