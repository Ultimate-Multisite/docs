---
id: wu_apply_signup_fee
title: مرشح - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# عامل التصفية: wu_apply_signup_fee

يحدد ما إذا كان يجب تطبيق رسوم التسجيل أم لا.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $add_signup_fee | `bool` | ما إذا كان يجب إضافة رسوم التسجيل أم لا. |
| $product | `object` | كائن مستوى العضوية. |
| $this | `\WP_Ultimo\Checkout\Cart` | كائن التسجيل. |

### منذ

- 3.1

### المصدر

تم تعريفه في [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769) في السطر 1769
