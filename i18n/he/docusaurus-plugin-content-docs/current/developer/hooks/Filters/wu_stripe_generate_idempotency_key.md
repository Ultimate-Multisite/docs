---
id: wu_stripe_generate_idempotency_key
title: פילטר - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

מסנן את ערך ה-`idempotency_key` שנשלח יחד עם אפשרויות החיוב של Stripe.

## פרמטרים

| Name | Type | תיאור |
|------|------|-------------|
| $idempotency_key | `string` | ערך מפתח ה-idempotency. |
| $args | `array` | ארגומנטים המשמשים לעזרה ביצירת המפתח. |
| $context | `string` | ההקשר שבו נוצר מפתח ה-idempotency. |

### מאז

- 3.5.0
### מקור

מוגדר ב-[inc/functions/checkout.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) בשורה 54
