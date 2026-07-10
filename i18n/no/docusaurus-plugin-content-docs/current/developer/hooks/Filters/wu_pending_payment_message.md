---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message {#filter-wupendingpaymentmessage}

Lar brukeren endre meldingen som vises for utestående betalinger.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $message | `string` | Meldingen som skal vises. |
| $customer | `\WP_Ultimo\Models\Customer` | Den aktuelle kunden. |
| $pending_payments | `array` | En liste over utestående betalinger. |

### Siden {#since}

- 2.0.19
### Kilde {#source}

Definert i [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) på linje 244
