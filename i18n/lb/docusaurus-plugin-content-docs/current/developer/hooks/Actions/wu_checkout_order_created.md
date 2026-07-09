---
id: wu_checkout_order_created
title: Aktioun - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Gëtt ausgeléist, nodeems d'Checkout-Bestellung komplett zesummegestallt ass.

Addons kënnen dëst benotzen, fir sekundär Memberschafte fir Produkter mat onofhängege Billing-Zyklen ze erstellen.

## Parameteren

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | D'Wuerekuerf-/Bestellungs-Objet. |
| $customer | `\WP_Ultimo\Models\Customer` | De Client. |
| $membership | `\WP_Ultimo\Models\Membership` | Déi primär Memberschaft. |
| $payment | `\WP_Ultimo\Models\Payment` | D'Bezuelung. |

### Zënter

- 2.5.0
### Quell

Definéiert an [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) op der Linn 891
