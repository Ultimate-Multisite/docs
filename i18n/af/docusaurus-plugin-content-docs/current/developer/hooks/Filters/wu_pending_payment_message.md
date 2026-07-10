---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message {#filter-wupendingpaymentmessage}

Maak dit moontlik vir die gebruiker om die boodskap oor die uitstaande betalings te verander.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Die boodskap wat gedruk word. |
| $customer | `\WP_Ultimo\Models\Customer` | Die huidige kliënt. |
| $pending_payments | `array` | 'n Lys van uitstaande betalings. |

### Since {#since}

- 2.0.19
### Source {#source}

Word gedefinieer in [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) by lyn 244
