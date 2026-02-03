---
id: wu_pending_payment_message
title: Filtro - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Permite al usuario cambiar el mensaje sobre los pagos pendientes.

## Parameters

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $message | `string` | El mensaje a imprimir. |
| $customer | `\WP_Ultimo\Models\Customer` | El cliente actual. |
| $pending_payments | `array` | Una lista con pagos pendientes. |

### Since

- 2.0.19

### Source

Definido en [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) en la línea 244
