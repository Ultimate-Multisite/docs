---
id: wu_domain_registration_completed
title: إجراء - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

يتم تشغيل هذا الإجراء بعد نجاح عملية تسجيل النطاق (domain).

## المعاملات

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | الدفعة التي أدت إلى عملية التسجيل. |
| $registration_data | `array<string,mixed>` | بيانات وصف التسجيل (مثل اسم النطاق، ومعرّف المزود، والسنوات، وتاريخ الانتهاء، إلخ). |
| $result | `array<string,mixed>` | مصفوفة النتائج الخام التي يعيدها مسجّل النطاقات (registrar). |

### منذ

- 2.0.0
### المصدر

مُعرّف في [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) في السطر 1204
