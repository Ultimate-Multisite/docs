---
id: wu_checkout_order_created
title: Action - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Körs efter att beställningen i kassan är helt sammansatt.

Addons kan använda detta för att skapa sekundära medlemskap för produkter med oberoende faktureringscykler.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Varukorgs-/beställningsobjektet. |
| $customer | `\WP_Ultimo\Models\Customer` | Kunden. |
| $membership | `\WP_Ultimo\Models\Membership` | Det primära medlemskapet. |
| $payment | `\WP_Ultimo\Models\Payment` | Betalningen. |

### Sedan {#since}

- 2.5.0
### Källa {#source}

Definieras i [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) på rad 891
