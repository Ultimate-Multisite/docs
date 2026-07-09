---
id: wu_membership_calculated_date_expiration
title: फिल्टर - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# फिल्टर: wu_membership_calculated_date_expiration

गणना गरिएको समाप्ति मिति फिल्टर गर्छ।

## प्यारामिटरहरू

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $expiration | `string` | MySQL ढाँचामा गणना गरिएको समाप्ति मिति। |
| $membership_id | `int` | सदस्यताको ID। |
| $membership | `\WP_Ultimo\Models\Membership` | सदस्यता वस्तु। |

### देखि

- 2.0
### स्रोत

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309) मा लाइन 1309 मा परिभाषित गरिएको
