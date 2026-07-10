---
id: wu_checkout_order_created
title: Gnìomh - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Thèid a chur an gnìomh às dèidh don òrdugh checkout a bhith air a chur ri chèile gu tur.

Faodaidh tuilleadain seo a chleachdadh gus ballrachdan àrd-sgoile a chruthachadh airson batharan le cuairtean bileachaidh neo-eisimeileach.

## Paramadairean {#parameters}

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | An nì cairt/òrdugh. |
| $customer | `\WP_Ultimo\Models\Customer` | An custamaiche. |
| $membership | `\WP_Ultimo\Models\Membership` | A’ phrìomh bhallrachd. |
| $payment | `\WP_Ultimo\Models\Payment` | Am pàigheadh. |

### Bho {#since}

- 2.5.0
### Tùs {#source}

Air a mhìneachadh ann an [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) aig loidhne 891
