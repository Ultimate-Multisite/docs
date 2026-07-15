---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# الإجراء: wu_domain_registration_failed

يتم تشغيله بعد فشل محاولة تسجيل النطاق.

## المعاملات {#parameters}

| الاسم | النوع | الوصف |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | الدفعة التي أدت إلى محاولة التسجيل. |
| $registration_data | `array<string,mixed>` | البيانات الوصفية للتسجيل، بما في ذلك حالة الفشل ورسالة الخطأ. |
| $error_message | `string` | رسالة خطأ قابلة للقراءة البشرية من مسجل النطاقات. |

### منذ {#since}

- 2.0.0
### المصدر {#source}

مُعرّف في [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) في السطر 1250
