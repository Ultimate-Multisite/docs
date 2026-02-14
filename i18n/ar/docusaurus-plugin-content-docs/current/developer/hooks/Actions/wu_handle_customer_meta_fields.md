---
id: wu_handle_customer_meta_fields
title: الإجراء - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# إجراء: wu_handle_customer_meta_fields

السماح لمطوري الإضافات بحفظ بيانات الميتا بطرق مختلفة إذا احتاجوا ذلك.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $meta_repository | `array` | قائمة حقول الميتا، المفتاح =&gt; القيمة مُهيكلة. |
| $customer | `\Customer` | كائن العميل في Ultimate Multisite. |
| $checkout | `\Checkout` | فئة Checkout. |

### منذ

- 2.0.0

### المصدر

معرّف في [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) في السطر 1211
