---
id: wu_checkout_order_created
title: Akcia - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Spustí sa po úplnom zostavení objednávky checkoutu.

Doplnky to môžu použiť na vytvorenie sekundárnych členstiev pre produkty s nezávislými fakturačnými cyklami.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Objekt košíka/objednávky. |
| $customer | `\WP_Ultimo\Models\Customer` | Zákazník. |
| $membership | `\WP_Ultimo\Models\Membership` | Primárne členstvo. |
| $payment | `\WP_Ultimo\Models\Payment` | Platba. |

### Od verzie {#since}

- 2.5.0
### Zdroj {#source}

Definované v [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) na riadku 891
