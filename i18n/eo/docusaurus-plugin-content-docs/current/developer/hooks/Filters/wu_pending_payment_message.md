---
id: wu_pending_payment_message
title: Filtro - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filtro: wu_pending_payment_message

Permesas al uzanto ŝanĝi la mesaĝon pri la pritraktataj pagoj.

## Parametroj

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $message | `string` | La mesaĝo por presi. |
| $customer | `\WP_Ultimo\Models\Customer` | La nuna kliento. |
| $pending_payments | `array` | Listo kun pritraktataj pagoj. |

### Ekde

- 2.0.19
### Fonto

Difinita en [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) ĉe linio 244
