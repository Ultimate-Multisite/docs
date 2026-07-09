---
id: wu_checkout_order_created
title: Handling - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Udløses efter checkout-ordren er samlet fuldt ud.

Addons kan bruge dette til at oprette sekundære memberships for produkter med uafhængige faktureringscyklusser.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Kurv-/ordreobjektet. |
| $customer | `\WP_Ultimo\Models\Customer` | Kunden. |
| $membership | `\WP_Ultimo\Models\Membership` | Det primære membership. |
| $payment | `\WP_Ultimo\Models\Payment` | Betalingen. |

### Siden

- 2.5.0
### Kilde

Defineret i [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) på linje 891
