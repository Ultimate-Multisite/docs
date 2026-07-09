---
id: wu_membership_post_renew
title: Action - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew {#action-wumembershippostrenew}

सदस्यता नवीनीकरण के बाद ट्रिगर होता है।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | सेट की जाने वाली नई समाप्ति तिथि। |
| $membership_id | `int` | सदस्यता की ID। |
| $membership | `\Membership` | सदस्यता ऑब्जेक्ट। |

### कब से {#since}

- 2.0
### स्रोत {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) में लाइन 2235 पर परिभाषित।
