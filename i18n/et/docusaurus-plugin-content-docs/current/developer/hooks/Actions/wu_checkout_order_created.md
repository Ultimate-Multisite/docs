---
id: wu_checkout_order_created
title: Toiming - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Toiming: wu_checkout_order_created

Käivitub pärast seda, kui checkout tellimus on täielikult koostatud.

Lisad saavad seda kasutada teiseste liikmesuste loomiseks toodetele, millel on sõltumatud arveldustsüklid.

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | The cart/order object. |
| $customer | `\WP_Ultimo\Models\Customer` | The customer. |
| $membership | `\WP_Ultimo\Models\Membership` | The primary membership. |
| $payment | `\WP_Ultimo\Models\Payment` | The payment. |

### Alates {#since}

- 2.5.0
### Allikas {#source}

Määratletud failis [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) real 891
