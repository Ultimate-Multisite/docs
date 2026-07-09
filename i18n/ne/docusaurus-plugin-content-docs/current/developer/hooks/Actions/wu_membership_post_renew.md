---
id: wu_membership_post_renew
title: कार्य - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# कार्य: wu_membership_post_renew

सदस्यता नवीकरणपछि ट्रिगर हुन्छ।

## प्यारामिटरहरू

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $expiration | `string` | सेट गरिने नयाँ समाप्ति मिति। |
| $membership_id | `int` | सदस्यताको ID। |
| $membership | `\Membership` | सदस्यता वस्तु। |

### देखि

- 2.0
### स्रोत

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) मा लाइन 2235 मा परिभाषित गरिएको छ।
