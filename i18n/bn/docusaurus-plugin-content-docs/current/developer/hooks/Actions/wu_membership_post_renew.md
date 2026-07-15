---
id: wu_membership_post_renew
title: Action - wu_membership_post_renew
sidebar_label: wu_membership_post_renew
_i18n_hash: fbad65cce616f38b3b55d48b037365ad
---
# অ্যাকশন: wu_membership_post_renew

মেম্বারশিপ রিনিউ করার পরে এটি ট্রিগার হয়।

## প্যারামিটার {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $expiration | `string` | সেট করার জন্য নতুন মেয়াদ উত্তীর্ণের তারিখ। |
| $membership_id | `int` | মেম্বারশিপটির আইডি। |
| $membership | `\Membership` | মেম্বারশিপ অবজেক্ট। |

### কত থেকে {#since}

- 2.0
### উৎস {#source}

[`inc/models/class-membership.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-membership.php#L2235) ফাইলের ২২৩৫ লাইনে সংজ্ঞায়িত করা হয়েছে।
