---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message {#filter-wupendingpaymentmessage}

Omogućava korisniku da promijeni poruku koja se prikazuje za neizmirena plaćanja.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Poruka koja se prikazuje. |
| $customer | `\WP_Ultimo\Models\Customer` | Trenutni korisnik/kupac. |
| $pending_payments | `array` | Lista neizmirenih plaćanja. |

### Od {#since}

- 2.0.19
### Izvor {#source}

Definisano u [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) na liniji 244
