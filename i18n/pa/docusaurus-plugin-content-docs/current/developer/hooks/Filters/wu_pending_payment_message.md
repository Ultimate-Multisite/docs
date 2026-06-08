---
id: wu_pending_payment_message
title: ਫਿਲਟਰ - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

ਯੂਜ਼ਰ ਨੂੰ ਲੰਬਿਤ ਭੁਗਤਾਨਾਂ (pending payments) ਬਾਰੇ ਸੁਨੇਹਾ ਬਦਲਣ ਦੀ ਇਜਾਜ਼ਤ ਦੇਣਾ।

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | ਪ੍ਰਿੰਟ ਕਰਨ ਲਈ ਸੁਨੇਹਾ। |
| $customer | `\WP_Ultimo\Models\Customer` | ਮੌਜੂਦਾ ਗਾਹਕ। |
| $pending_payments | `array` | ਲੰਬਿਤ ਭੁਗਤਾਨਾਂ ਦੀ ਸੂਚੀ। |

### Since

- 2.0.19
### Source

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) ਵਿੱਚ ਲਾਈਨ 244 'ਤੇ ਪਰਿਭਾਸ਼ਿਤ ਕੀਤਾ ਗਿਆ ਹੈ।
