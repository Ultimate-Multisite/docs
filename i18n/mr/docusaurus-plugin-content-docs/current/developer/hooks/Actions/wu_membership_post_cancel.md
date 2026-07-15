---
id: wu_membership_post_cancel
title: Action - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# कृती: wu_membership_post_cancel

जेव्हा सदस्यता (membership) रद्द होते, तेव्हा ही कृती (action) ट्रिगर होते.

यामुळे रद्द करण्याची ईमेल (cancellation email) पाठवली जाते.

## पॅरामीटर्स {#parameters}

| नाव (Name) | प्रकार (Type) | वर्णन (Description) |
|------|------|-------------|
| $membership_id | `int` | सदस्यत्वाचा आयडी (ID). |
| $membership | `\WP_Ultimo\Models\Membership` | सदस्यता ऑब्जेक्ट (Membership object). |

### पासून (Since) {#since}

- 2.0
### स्रोत (Source) {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) या फाईलमध्ये लाइन २२९० वर परिभाषित केले आहे.
