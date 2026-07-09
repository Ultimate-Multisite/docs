---
id: wu_checkout_order_created
title: Aksyon - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Deklanche apre yo fin rasanble lòd checkout la nèt.

Addons yo ka itilize sa pou kreye abònman segondè pou pwodwi ki gen sik fakti endepandan.

## Paramèt

| Non | Tip | Deskripsyon |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Objè panye/lòd la. |
| $customer | `\WP_Ultimo\Models\Customer` | Kliyan an. |
| $membership | `\WP_Ultimo\Models\Membership` | Abònman prensipal la. |
| $payment | `\WP_Ultimo\Models\Payment` | Peman an. |

### Depi

- 2.5.0
### Sous

Defini nan [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) nan liy 891
