---
id: wu_checkout_order_created
title: Ekintza - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Checkout eskaera guztiz osatu ondoren abiarazten da.

Addons-ek hau erabil dezakete fakturazio-ziklo independenteak dituzten produktuentzako bigarren mailako membership-ak sortzeko.

## Parametroak {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Saski/eskaera objektua. |
| $customer | `\WP_Ultimo\Models\Customer` | Bezeroa. |
| $membership | `\WP_Ultimo\Models\Membership` | Membership nagusia. |
| $payment | `\WP_Ultimo\Models\Payment` | Ordainketa. |

### Noiztik {#since}

- 2.5.0
### Iturburua {#source}

[`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) fitxategian definitua, 891. lerroan
