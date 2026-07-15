---
id: wu_domain_renewal_completed
title: إجراء - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

يتم تشغيل هذا الإجراء بعد تجديد النطاق (الدومين) بنجاح.

## المعاملات (Parameters) {#parameters}

| الاسم (Name) | النوع (Type) | الوصف (Description) |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | عملية الدفع التي أدت إلى التجديد. |
| $renewal_data | `array&lt;string,mixed&gt;` | بيانات وصف التجديد (مثل اسم النطاق، السنوات، معرف العميل، إلخ). |
| $result | `array&lt;string,mixed&gt;` | مصفوفة النتائج الخام التي يعيدها مسجل النطاقات (registrar)، وتشمل تاريخ الانتهاء الجديد (expiry_date). |

### منذ (Since) {#since}

- 2.0.0
### المصدر (Source) {#source}

مُعرّف في [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) في السطر 594
