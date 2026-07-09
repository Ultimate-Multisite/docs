---
id: wu_stripe_generate_idempotency_key
title: فیلتر - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

مقدار `idempotency_key` که همراه با گزینه‌های پرداخت Stripe ارسال می‌شود را فیلتر می‌کند.

## پارامترها {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | مقدار کلید ای‌دِمپوتنس. |
| $args | `array` | آرگومان‌هایی که برای کمک به تولید کلید استفاده می‌شوند. |
| $context | `string` | زمینه‌ای که کلید ای‌دِمپوتنس در آن تولید می‌شود. |

### از نسخه {#since}

- 3.5.0
### منبع {#source}

در [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) در خط ۵۴ تعریف شده است.
