---
id: wu_membership_pre_renew
title: Action - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# Action: wu_membership_pre_renew

हे सदस्यत्व नूतनीकरण करण्यापूर्वी ट्रिगर होते.

## पॅरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | सेट करायची नवीन समाप्ती तारीख. |
| $membership_id | `int` | सदस्यत्वाचा आयडी. |
| $membership | `\Membership` | सदस्यत्व ऑब्जेक्ट. |

### पासून {#since}

- 2.0
### स्रोत {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) या फाईलमध्ये लाइन २२०४ वर परिभाषित केले आहे.
