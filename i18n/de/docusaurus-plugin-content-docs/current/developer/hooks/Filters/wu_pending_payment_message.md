---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Erlaubt dem Benutzer, die Nachricht über ausstehende Zahlungen zu ändern.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Die Nachricht, die ausgegeben werden soll. |
| $customer | `\WP_Ultimo\Models\Customer` | Der aktuelle Kunde. |
| $pending_payments | `array` | Eine Liste mit ausstehenden Zahlungen. |

### Seit

- 2.0.19

### Quelle

Definiert in [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) bei Zeile 244
