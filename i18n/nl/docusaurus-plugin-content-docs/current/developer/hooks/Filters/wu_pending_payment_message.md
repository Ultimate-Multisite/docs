---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Laat de gebruiker het bericht over de openstaande betalingen aanpassen.

## Parameters

| Name | Type | Beschrijving |
|------|------|--------------|
| $message | `string` | Het bericht om af te drukken. |
| $customer | `\WP_Ultimo\Models\Customer` | De huidige klant. |
| $pending_payments | `array` | Een lijst met openstaande betalingen. |

### Since

- 2.0.19

### Source

Gedefinieerd in [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) op regel 244
