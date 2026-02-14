---
id: wu_checkout_order_created
title: الإجراء - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# الإجراء: wu_checkout_order_created

يتم إطلاقه بعد تجميع طلب الخروج بالكامل.

يمكن للإضافات استخدام هذا لإنشاء عضويات ثانوية للمنتجات ذات دورات فواتير مستقلة.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | كائن السلة/الطلب. |
| $customer | `\WP_Ultimo\Models\Customer` | العميل. |
| $membership | `\WP_Ultimo\Models\Membership` | العضوية الأساسية. |
| $payment | `\WP_Ultimo\Models\Payment` | الدفع. |

### منذ

- 2.5.0

### المصدر

تم تعريفه في [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) في السطر 891
