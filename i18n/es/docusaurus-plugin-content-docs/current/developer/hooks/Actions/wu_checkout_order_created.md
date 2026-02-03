---
id: wu_checkout_order_created
title: Acción - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Acción: wu_checkout_order_created

Se dispara después de que el pedido de pago esté completamente ensamblado.

Los complementos pueden usar esto para crear membresías secundarias para productos con ciclos de facturación independientes.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | El objeto del carrito/pedido. |
| $customer | `\WP_Ultimo\Models\Customer` | El cliente. |
| $membership | `\WP_Ultimo\Models\Membership` | La membresía principal. |
| $payment | `\WP_Ultimo\Models\Payment` | El pago. |

### Desde

- 2.5.0

### Fuente

Defined in [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) at line 891
