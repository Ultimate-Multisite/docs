---
id: wu_pending_payment_message
title: Suodatin - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message {#filter-wupendingpaymentmessage}

Salli käyttäjän muuttaa odottavia maksuja koskevaa viestiä.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $message | `string` | Tulostettava viesti. |
| $customer | `\WP_Ultimo\Models\Customer` | Nykyinen asiakas. |
| $pending_payments | `array` | Luettelo odottavista maksuista. |

### Alkaen {#since}

- 2.0.19
### Lähde {#source}

Määritelty tiedostossa [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) rivillä 244
