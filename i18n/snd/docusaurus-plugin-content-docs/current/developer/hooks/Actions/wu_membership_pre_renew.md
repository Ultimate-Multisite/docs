---
id: wu_membership_pre_renew
title: عمل - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

رڪنيت جي تجديد کان اڳ ٽرگر ٿئي ٿو.

## پيرا ميٽر

| نالو | قسم | وضاحت |
|------|------|-------------|
| $expiration | `string` | مقرر ڪرڻ لاءِ نئين ختم ٿيڻ جي تاريخ. |
| $membership_id | `int` | رڪنيت جي ID. |
| $membership | `\Membership` | رڪنيت جي شئي. |

### کان وٺي

- 2.0
### ذريعو

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) ۾ لڪير 2204 تي بيان ڪيل.
