---
id: wu_pending_payment_message
title: Tace - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Tace: wu_pending_payment_message {#filter-wupendingpaymentmessage}

Ba wa mai amfani damar canza saƙon game da biyan kuɗin da ke jiran kammalawa.

## Sigogi {#parameters}

| Suna | Nau'i | Bayani |
|------|------|-------------|
| $message | `string` | Saƙon da za a buga. |
| $customer | `\WP_Ultimo\Models\Customer` | Abokin ciniki na yanzu. |
| $pending_payments | `array` | Jerin biyan kuɗin da ke jiran kammalawa. |

### Tun daga {#since}

- 2.0.19
### Tushe {#source}

An ayyana a cikin [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) a layi na 244
