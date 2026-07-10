---
id: wu_membership_post_renew
title: عمل - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# عمل: wu_membership_post_renew {#action-wumembershippostrenew}

رڪنيت جي تجديد کان پوءِ ٽرگر ٿئي ٿو.

## پيرا ميٽر {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | مقرر ڪرڻ لاءِ نئين ختم ٿيڻ جي تاريخ. |
| $membership_id | `int` | رڪنيت جي ID. |
| $membership | `\Membership` | رڪنيت آبجيڪٽ. |

### کان وٺي {#since}

- 2.0
### ذريعو {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) ۾ قطار 2235 تي بيان ٿيل آهي.
