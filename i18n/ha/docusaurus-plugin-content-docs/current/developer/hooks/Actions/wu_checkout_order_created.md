---
id: wu_checkout_order_created
title: Aiki - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Yana aiki bayan an haɗa umarnin checkout gaba ɗaya.

Addons za su iya amfani da wannan don ƙirƙirar membership na biyu don products masu zagayowar biyan kuɗi masu zaman kansu.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Abin cart/order. |
| $customer | `\WP_Ultimo\Models\Customer` | Customer. |
| $membership | `\WP_Ultimo\Models\Membership` | Membership na farko. |
| $payment | `\WP_Ultimo\Models\Payment` | Biyan kuɗi. |

### Tun daga {#since}

- 2.5.0
### Tushe {#source}

An bayyana a cikin [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) a layi na 891
