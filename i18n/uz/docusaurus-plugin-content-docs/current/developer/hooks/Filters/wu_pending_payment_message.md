---
id: wu_pending_payment_message
title: Filtr - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Foydalanuvchiga kutilayotgan to‘lovlar haqidagi xabarni o‘zgartirishga ruxsat bering.

## Parametrlar

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Chop etiladigan xabar. |
| $customer | `\WP_Ultimo\Models\Customer` | Joriy mijoz. |
| $pending_payments | `array` | Kutilayotgan to‘lovlar ro‘yxati. |

### Dan boshlab

- 2.0.19
### Manba

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) faylida 244-qatorda aniqlangan
