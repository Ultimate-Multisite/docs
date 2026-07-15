---
id: wu_membership_pre_renew
title: Action - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

सदस्यता नवीनीकरण से पहले ट्रिगर होता है।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | सेट की जाने वाली नई समाप्ति तिथि। |
| $membership_id | `int` | सदस्यता की ID। |
| $membership | `\Membership` | सदस्यता ऑब्जेक्ट। |

### Since {#since}

- 2.0
### Source {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) में लाइन 2204 पर परिभाषित।
