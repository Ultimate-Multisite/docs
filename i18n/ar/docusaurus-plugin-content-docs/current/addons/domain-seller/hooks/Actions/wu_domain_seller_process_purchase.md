---
id: wu_domain_seller_process_purchase
title: Action - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# الإجراء: wu_domain_seller_process_purchase

يتم تشغيل هذا الإجراء عند معالجة عملية شراء نطاق بعد إكمال الدفع.

## المعاملات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | كائن الدفع. |
| $checkout_data | `array<string,mixed>` | بيانات إكمال الدفع الكاملة من نموذج التسجيل. |

### منذ

- 2.0.0
### المصدر

مُعرّف في [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) في السطر 246
