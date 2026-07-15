---
id: wu_bypass_unset_current_user
title: Filter - wu_bypass_unset_current_user
sidebar_label: wu_bypass_unset_current_user
_i18n_hash: fc4c248df410793da1754944250d8b11
---
# Filter: wu_bypass_unset_current_user

ডেভেলপারদের বর্তমান ব্যবহারকারীকে আনসেট (unset) করার কোডটি বাইপাস করতে দেয়।

যদি `null` ছাড়া অন্য কিছু রিটার্ন করা হয়, তবে বর্তমানে লগইন করা ব্যবহারকারীকে আনসেট করা প্রক্রিয়াটি বাইপাস হয়ে যাবে। এটি কিছু পরিস্থিতিতে খুব কাজে আসতে পারে, উদাহরণস্বরূপ, যখন সাব-সাইটগুলি অ্যাডমিন প্যানেল হিসেবে ব্যবহার করা হয়।

## প্যারামিটারসমূহ {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $null_or_bypass | `mixed` | এগিয়ে যাওয়ার জন্য `null`, অন্য কিছু হলে এটি বাইপাস হবে। |
| $current_user | `false\|\WP_User` | বর্তমান ব্যবহারকারী অবজেক্ট। |

### শুরু {#since}

- 2.0.11
### উৎস {#source}

[`inc/compat/class-multiple-accounts-compat.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/compat/class-multiple-accounts-compat.php#L221) ফাইলে লাইন ২২১ এ সংজ্ঞায়িত।

## রিটার্ন করে {#returns}
