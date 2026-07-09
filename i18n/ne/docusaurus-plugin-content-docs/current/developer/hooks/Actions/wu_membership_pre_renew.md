---
id: wu_membership_pre_renew
title: कार्य - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# कार्य: wu_membership_pre_renew {#action-wumembershipprerenew}

सदस्यता नवीकरणअघि ट्रिगर हुन्छ।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $expiration | `string` | सेट गरिने नयाँ समाप्ति मिति। |
| $membership_id | `int` | सदस्यताको ID। |
| $membership | `\Membership` | सदस्यता वस्तु। |

### देखि {#since}

- 2.0
### स्रोत {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) मा लाइन 2204 मा परिभाषित गरिएको छ।
