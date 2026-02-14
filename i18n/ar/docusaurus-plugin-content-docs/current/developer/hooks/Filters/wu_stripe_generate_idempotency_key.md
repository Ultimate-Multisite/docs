---
id: wu_stripe_generate_idempotency_key
title: مرشح - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# عامل التصفية: wu_stripe_generate_idempotency_key

يصفّح قيمة مفتاح التكرار (idempotency_key) المرسلة مع خيارات السحب من Stripe.

## المعاملات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $idempotency_key | `string` | قيمة مفتاح التكرار. |
| $args | `array` | المعاملات المستخدمة للمساعدة في إنشاء المفتاح. |
| $context | `string` | السياق الذي يُنشأ فيه مفتاح التكرار. |

### منذ

- 3.5.0

### المصدر

مُعرّف في [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) في السطر 54
