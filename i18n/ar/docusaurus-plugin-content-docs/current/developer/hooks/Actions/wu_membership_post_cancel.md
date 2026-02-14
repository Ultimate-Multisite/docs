---
id: wu_membership_post_cancel
title: الإجراء - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# الإجراء: wu_membership_post_cancel

يتم تشغيله بعد إلغاء العضوية.

يؤدي هذا إلى إرسال بريد إلكتروني للإلغاء.

## المعلمات

| الاسم | النوع | الوصف |
|------|------|-------------|
| $membership_id | `int` | معرف العضوية. |
| $membership | `\WP_Ultimo\Models\Membership` | كائن العضوية. |

### منذ

- 2.0

### المصدر

تم تعريفه في [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) في السطر 2290
