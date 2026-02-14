---
id: wu_handle_user_meta_fields
title: الإجراء - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# الإجراء: wu_handle_user_meta_fields

السماح لمطوري الإضافات بحفظ بيانات الميتا للمستخدم بطرق مختلفة إذا لزم الأمر.

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $meta_repository | `array` | قائمة حقول الميتا، مُنظمة على شكل مفتاح => قيمة. |
| $user | `\WP_User` | كائن مستخدم ووردبريس. |
| $customer | `\Customer` | كائن عميل Ultimate Multisite. |
| $checkout | `\Checkout` | فئة الدفع. |

### منذ

- 2.0.4

### المصدر

تم تعريفه في [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) في السطر 1244
