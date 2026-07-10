---
id: wu_membership_post_cancel
title: Action - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel {#action-wumembershippostcancel}

जब सदस्यता (membership) रद्द हो जाती है, तो यह एक्शन ट्रिगर होता है।

यह एक्शन कैंसलेशन ईमेल भेजने के लिए ट्रिगर होता है।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $membership_id | `int` | सदस्यता की आईडी। |
| $membership | `\WP_Ultimo\Models\Membership` | सदस्यता ऑब्जेक्ट। |

### कब से {#since}

- 2.0
### स्रोत {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) में लाइन 2290 पर परिभाषित।
