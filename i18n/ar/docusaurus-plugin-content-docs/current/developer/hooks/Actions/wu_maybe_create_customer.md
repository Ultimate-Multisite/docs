---
id: wu_maybe_create_customer
title: الإجراء - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

السماح لمطوري الإضافات بالقيام بأمور إضافية عندما يُضاف العميل.

هنا نضيف الhooks لإضافة العميل->المستخدم إلى الموقع الرئيسي أيضًا، على سبيل المثال.

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $customer | `\Customer` | العميل الذي ربما تم إنشاؤه. |
| $checkout | `\Checkout` | فئة الدفع الحالية. |

### Since

- 2.0.0
### Source

تم تعريفه في [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) في السطر 1156
