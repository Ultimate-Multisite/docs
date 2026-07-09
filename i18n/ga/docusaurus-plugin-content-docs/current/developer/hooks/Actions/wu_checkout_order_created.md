---
id: wu_checkout_order_created
title: Gníomh - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Gníomh: wu_checkout_order_created

Spreagtar é tar éis ordú an checkout a bheith curtha le chéile go hiomlán.

Is féidir le breiseáin é seo a úsáid chun ballraíochtaí tánaisteacha a chruthú do tháirgí a bhfuil timthriallta billeála neamhspleácha acu.

## Paraiméadair

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Réad an tralaí/ordaithe. |
| $customer | `\WP_Ultimo\Models\Customer` | An custaiméir. |
| $membership | `\WP_Ultimo\Models\Membership` | An phríomhbhallraíocht. |
| $payment | `\WP_Ultimo\Models\Payment` | An íocaíocht. |

### Ó

- 2.5.0
### Foinse

Sainithe in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) ag líne 891
