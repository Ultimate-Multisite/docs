---
id: wu_pending_payment_message
title: Scagaire - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Scagaire: wu_pending_payment_message {#filter-wupendingpaymentmessage}

Lig don úsáideoir an teachtaireacht faoi na híocaíochtaí ar feitheamh a athrú.

## Paraiméadair {#parameters}

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $message | `string` | An teachtaireacht le priontáil. |
| $customer | `\WP_Ultimo\Models\Customer` | An custaiméir reatha. |
| $pending_payments | `array` | Liosta le híocaíochtaí ar feitheamh. |

### Ó shin {#since}

- 2.0.19
### Foinse {#source}

Sainithe in [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) ag líne 244
