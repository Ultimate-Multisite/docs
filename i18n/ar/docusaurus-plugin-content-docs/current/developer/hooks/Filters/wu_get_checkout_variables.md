---
id: wu_get_checkout_variables
title: فلتر - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# عامل التصفية: wu_get_checkout_variables

يتيح لمطوري الإضافات تصفية الإعدادات المسبقة لصفحة الدفع.

احذر، فقد يؤدي فقدان المفاتيح إلى كسر عملية الدفع بالكامل على الواجهة الأمامية.

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $variables | `array` | المتغيرات المترجمة. |
| $checkout | `\Checkout` | فئة الدفع. |

### منذ

- 2.0.0
### المصدر

مُعرَّف في [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) في السطر 1970


## الإرجاع
مصفوفة المتغيرات الجديدة.
