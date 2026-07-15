---
id: wu_pending_payment_message
title: Filtru - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Jippermetti lill-utent ibiddel il-messaġġ dwar il-ħlasijiet pendenti.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $message | `string` | Il-messaġġ li għandu jintwera. |
| $customer | `\WP_Ultimo\Models\Customer` | Il-klijent attwali. |
| $pending_payments | `array` | Lista bil-ħlasijiet pendenti. |

### Minn {#since}

- 2.0.19
### Sors {#source}

Iddefinit f’[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) fil-linja 244
