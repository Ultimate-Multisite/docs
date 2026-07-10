---
id: wu_checkout_order_created
title: Toiminto - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Käynnistyy, kun checkout-tilaus on koottu kokonaan.

Lisäosat voivat käyttää tätä luodakseen toissijaisia jäsenyyksiä tuotteille, joilla on itsenäiset laskutusjaksot.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | The cart/order object. |
| $customer | `\WP_Ultimo\Models\Customer` | The customer. |
| $membership | `\WP_Ultimo\Models\Membership` | The primary membership. |
| $payment | `\WP_Ultimo\Models\Payment` | The payment. |

### Alkaen versiosta {#since}

- 2.5.0
### Lähde {#source}

Määritelty tiedostossa [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) rivillä 891
