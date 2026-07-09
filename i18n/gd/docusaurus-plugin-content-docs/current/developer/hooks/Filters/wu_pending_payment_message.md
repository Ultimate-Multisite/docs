---
id: wu_pending_payment_message
title: Criathrag - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message {#filter-wupendingpaymentmessage}

Leig leis a’ chleachdaiche an teachdaireachd mu na pàighidhean ri thighinn atharrachadh.

## Paramadairean {#parameters}

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $message | `string` | An teachdaireachd ri clò-bhualadh. |
| $customer | `\WP_Ultimo\Models\Customer` | An customer làithreach. |
| $pending_payments | `array` | Liosta le pàighidhean ri thighinn. |

### Bho {#since}

- 2.0.19
### Tùs {#source}

Air a mhìneachadh ann an [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) aig loidhne 244
