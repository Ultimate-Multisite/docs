---
id: wu_checkout_order_created
title: Darbība - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

Tiek palaists pēc tam, kad norēķināšanās pasūtījums ir pilnībā salikts.

Papildinājumi var to izmantot, lai izveidotu sekundāras dalības produktiem ar neatkarīgiem norēķinu cikliem.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Groza/pasūtījuma objekts. |
| $customer | `\WP_Ultimo\Models\Customer` | Klients. |
| $membership | `\WP_Ultimo\Models\Membership` | Primārā dalība. |
| $payment | `\WP_Ultimo\Models\Payment` | Maksājums. |

### Kopš {#since}

- 2.5.0
### Avots {#source}

Definēts [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) 891. rindā
