---
id: wu_membership_post_cancel
title: कार्य - wu_membership_post_cancel
sidebar_label: wu_membership_post_cancel
_i18n_hash: f8d5d59dbde2d29c6006ef82edd7384a
---
# Action: wu_membership_post_cancel

सदस्यता रद्द भएपछि ट्रिगर हुन्छ।

यसले रद्दीकरण इमेल ट्रिगर गर्छ।

## प्यारामिटरहरू

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $membership_id | `int` | सदस्यताको ID। |
| $membership | `\WP_Ultimo\Models\Membership` | सदस्यता वस्तु। |

### देखि

- 2.0
### स्रोत

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2290) मा लाइन 2290 मा परिभाषित गरिएको
