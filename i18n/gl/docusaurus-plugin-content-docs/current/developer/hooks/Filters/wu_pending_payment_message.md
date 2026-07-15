---
id: wu_pending_payment_message
title: Filtro - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filtro: wu_pending_payment_message

Permite ao usuario cambiar a mensaxe sobre os pagamentos pendentes.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $message | `string` | A mensaxe para imprimir. |
| $customer | `\WP_Ultimo\Models\Customer` | O cliente actual. |
| $pending_payments | `array` | Unha lista con pagamentos pendentes. |

### Desde {#since}

- 2.0.19
### Fonte {#source}

Definido en [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) na liña 244
