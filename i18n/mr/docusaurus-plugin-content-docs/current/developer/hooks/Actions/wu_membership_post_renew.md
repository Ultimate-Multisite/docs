---
id: wu_membership_post_renew
title: Action - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# Action: wu_membership_post_renew

सदस्यत्व नूतनीकरण (membership renewal) झाल्यावर ही कृती (action) ट्रिगर होते.

## पॅरामीटर्स (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $expiration | `string` | सेट करायची नवीन समाप्ती तारीख (New expiration date). |
| $membership_id | `int` | सदस्यत्वाचा आयडी (The ID of the membership). |
| $membership | `\Membership` | सदस्यत्व ऑब्जेक्ट (Membership object). |

### कधीपासून (Since) {#since}

- 2.0
### स्रोत (Source) {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) या फाईलमध्ये लाइन २२३५ वर परिभाषित केले आहे.
