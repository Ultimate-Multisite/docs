---
id: wu_checkout_order_created
title: Veiksmas - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Suveikia po to, kai atsiskaitymo užsakymas visiškai suformuojamas.

Addonai gali tai naudoti antrinėms narystėms kurti produktams su nepriklausomais atsiskaitymo ciklais.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Krepšelio / užsakymo objektas. |
| $customer | `\WP_Ultimo\Models\Customer` | Klientas. |
| $membership | `\WP_Ultimo\Models\Membership` | Pirminė narystė. |
| $payment | `\WP_Ultimo\Models\Payment` | Mokėjimas. |

### Nuo {#since}

- 2.5.0
### Šaltinis {#source}

Apibrėžta [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) 891 eilutėje
