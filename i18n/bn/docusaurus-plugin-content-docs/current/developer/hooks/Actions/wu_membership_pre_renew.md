---
id: wu_membership_pre_renew
title: Action - wu_membership_pre_renew
sidebar_label: wu_membership_pre_renew
_i18n_hash: 404f491e8f2f80099b721e1f475b4668
---
# অ্যাকশন: wu_membership_pre_renew {#action-wumembershipprerenew}

মেম্বারশিপ রিনিউ করার আগে এটি ট্রিগার হয়।

## প্যারামিটার {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $expiration | `string` | যে নতুন মেয়াদ শেষ হওয়ার তারিখ সেট করা হবে। |
| $membership_id | `int` | মেম্বারশিপটির আইডি। |
| $membership | `\Membership` | মেম্বারশিপ অবজেক্ট। |

### সংস্করণ {#since}

- 2.0
### উৎস {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2204) এর লাইন ২২০৪ এ সংজ্ঞায়িত করা হয়েছে।
