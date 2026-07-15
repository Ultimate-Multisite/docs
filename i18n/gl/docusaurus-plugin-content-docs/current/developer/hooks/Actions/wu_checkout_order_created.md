---
id: wu_checkout_order_created
title: Acción - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Acción: wu_checkout_order_created

Execútase despois de que a orde de checkout estea completamente montada.

Os addons poden usar isto para crear memberships secundarias para produtos con ciclos de facturación independentes.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | O obxecto de carriño/orde. |
| $customer | `\WP_Ultimo\Models\Customer` | O cliente. |
| $membership | `\WP_Ultimo\Models\Membership` | A membership principal. |
| $payment | `\WP_Ultimo\Models\Payment` | O pagamento. |

### Desde {#since}

- 2.5.0
### Fonte {#source}

Definido en [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) na liña 891
