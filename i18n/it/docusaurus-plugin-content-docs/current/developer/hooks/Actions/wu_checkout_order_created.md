---
id: wu_checkout_order_created
title: Azione - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Azione: wu_checkout_order_created

Si attiva dopo che l'ordine di checkout è stato completamente assemblato.

Gli addon possono usarla per creare abbonamenti secondari per prodotti con cicli di fatturazione indipendenti.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | L'oggetto carrello/ordine. |
| $customer | `\WP_Ultimo\Models\Customer` | Il cliente. |
| $membership | `\WP_Ultimo\Models\Membership` | L'abbonamento principale. |
| $payment | `\WP_Ultimo\Models\Payment` | Il pagamento. |

### Da

- 2.5.0

### Fonte

Definito in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) alla riga 891
