---
id: wu_domain_seller_complete_registration
title: Action - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# الإجراء: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

يتم تشغيل هذا الإجراء عندما يتغير حالة الدفع إلى حالة تتطلب تسجيل النطاق.

## المعاملات {#parameters}

| الاسم | النوع | الوصف |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | كائن الدفع. |
| $old_status | `string` | حالة الدفع السابقة قبل الانتقال. |

### منذ {#since}

- 2.0.0
### المصدر {#source}

مُعرّف في [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266) في السطر 266
