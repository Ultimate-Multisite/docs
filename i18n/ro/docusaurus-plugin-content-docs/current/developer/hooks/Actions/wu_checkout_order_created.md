---
id: wu_checkout_order_created
title: Acțiune - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Se declanșează după ce comanda de checkout este finalizată.

Adonurile pot folosi acest hook pentru a crea membriciari secundari pentru produse care au cicluri de facturare independente.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Obiectul coșului/comenzii. |
| $customer | `\WP_Ultimo\Models\Customer` | Clientul. |
| $membership | `\WP_Ultimo\Models\Membership` | Membrăria principală. |
| $payment | `\WP_Ultimo\Models\Payment` | Plățile. |

### De la {#since}

- 2.5.0
### Sursă {#source}

Definit în [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) la linia 891
