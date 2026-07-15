---
id: wu_pending_payment_message
title: வடிகட்டி - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

நிலுவையில் உள்ள கட்டணங்கள் பற்றிய செய்தியைப் (message) பயனர் மாற்ற இது அனுமதிக்கிறது.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | அச்சிட வேண்டிய செய்தி இது. |
| $customer | `\WP_Ultimo\Models\Customer` | தற்போதைய வாடிக்கையாளர். |
| $pending_payments | `array` | நிலுவையில் உள்ள கட்டணங்களின் பட்டியல். |

### Since {#since}

- 2.0.19
### Source {#source}

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) என்ற கோப்பில் 244 வரியில் வரையறுக்கப்பட்டுள்ளது.
