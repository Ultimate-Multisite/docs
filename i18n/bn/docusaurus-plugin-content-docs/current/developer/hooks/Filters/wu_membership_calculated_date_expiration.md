---
id: wu_membership_calculated_date_expiration
title: ফিল্টার - wu_membership_calculated_date_expiration
sidebar_label: wu_membership_calculated_date_expiration
_i18n_hash: 92e1113e33a3b69e4fc3d07d6dcd8d69
---
# Filter: wu_membership_calculated_date_expiration {#filter-wumembershipcalculateddateexpiration}

গণনা করা মেয়াদ শেষের তারিখটি ফিল্টার করে।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | বিবরণ |
|------|------|-------------|
| $expiration | `string` | MySQL ফরম্যাটে গণনা করা মেয়াদ শেষের তারিখ। |
| $membership_id | `int` | মেম্বারশিপের আইডি। |
| $membership | `\WP_Ultimo\Models\Membership` | মেম্বারশিপ অবজেক্ট। |

### শুরু {#since}

- 2.0
### উৎস {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L1309)-এ লাইন ১৩০৯-এ সংজ্ঞায়িত করা হয়েছে।
