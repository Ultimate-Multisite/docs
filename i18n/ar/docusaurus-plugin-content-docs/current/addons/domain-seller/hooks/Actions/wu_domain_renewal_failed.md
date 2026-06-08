---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

يتم تشغيل هذا الإجراء بعد فشل محاولة تجديد النطاق.

## المعاملات

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | الدفعة التي أدت إلى محاولة التجديد. |
| $renewal_data | `array<string,mixed>` | بيانات وصف التجديد (مثل اسم النطاق، عدد السنوات، إلخ). |
| $error_message | `string` | رسالة خطأ يسهل قراءتها من مسجل النطاقات (registrar). |

### منذ

- 2.0.0
### المصدر

مُعرّف في [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) في السطر 630
