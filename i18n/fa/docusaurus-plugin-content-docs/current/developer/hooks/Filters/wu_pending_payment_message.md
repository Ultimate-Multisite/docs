---
id: wu_pending_payment_message
title: فیلتر - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# فیلتر: wu_pending_payment_message

به کاربر اجازه می‌دهد تا پیام مربوط به پرداخت‌های معلق را تغییر دهد.

## پارامترها {#parameters}

| نام | نوع | توضیحات |
|------|------|-------------|
| $message | `string` | پیامی که باید نمایش داده شود. |
| $customer | `\WP_Ultimo\Models\Customer` | مشتری فعلی. |
| $pending_payments | `array` | لیستی از پرداخت‌های معلق. |

### از نسخه {#since}

- 2.0.19
### منبع {#source}

در [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) در خط ۲۴۴ تعریف شده است.
