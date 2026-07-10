---
id: wu_checkout_order_created
title: Tumindak - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Mlaku sawisé pesenan checkout wis dirakit kanthi pepak.

Addon bisa migunakaké iki kanggo nggawe membership sekunder kanggo produk kanthi siklus billing mandiri.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Objek cart/pesenan. |
| $customer | `\WP_Ultimo\Models\Customer` | Customer kasebut. |
| $membership | `\WP_Ultimo\Models\Membership` | Membership utama. |
| $payment | `\WP_Ultimo\Models\Payment` | Payment kasebut. |

### Wiwit {#since}

- 2.5.0
### Sumber {#source}

Ditetepaké ing [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) ing larik 891
