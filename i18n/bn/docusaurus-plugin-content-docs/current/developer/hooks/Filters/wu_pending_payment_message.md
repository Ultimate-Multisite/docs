---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

ব্যবহারকারীকে মুলতুবি পেমেন্ট সংক্রান্ত বার্তা পরিবর্তন করার সুযোগ দেয়।

## প্যারামিটারসমূহ

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | যে বার্তাটি প্রিন্ট করা হবে। |
| $customer | `\WP_Ultimo\Models\Customer` | বর্তমান গ্রাহক। |
| $pending_payments | `array` | মুলতুবি পেমেন্টগুলির একটি তালিকা। |

### যেহেতু

- 2.0.19
### উৎস

[`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244)-এ লাইন ২৪৪-এ সংজ্ঞায়িত করা হয়েছে
