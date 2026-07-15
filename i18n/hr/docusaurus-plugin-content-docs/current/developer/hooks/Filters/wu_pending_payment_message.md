---
id: wu_pending_payment_message
title: Filtar - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filtar: wu_pending_payment_message

Omogućuje korisniku promjenu poruke o plaćanjima na čekanju.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $message | `string` | Poruka za ispis. |
| $customer | `\WP_Ultimo\Models\Customer` | Trenutačni klijent. |
| $pending_payments | `array` | Popis plaćanja na čekanju. |

### Od verzije {#since}

- 2.0.19
### Izvor {#source}

Definirano u [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) u retku 244
