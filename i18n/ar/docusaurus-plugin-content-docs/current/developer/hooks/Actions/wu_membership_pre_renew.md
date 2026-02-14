---
id: wu_membership_pre_renew
title: الإجراء - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

Triggers before the membership renewal.

## Parameters

| الاسم | النوع | الوصف |
|------|------|-------------|
| $expiration | `string` | تاريخ الانتهاء الجديد الذي سيتم تعيينه. |
| $membership_id | `int` | معرّف العضوية. |
| $membership | `\Membership` | كائن العضوية. |

### Since

- 2.0

### Source

تم تعريفه في [`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) في السطر 2204
