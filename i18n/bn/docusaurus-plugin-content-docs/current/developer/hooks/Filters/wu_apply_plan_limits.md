---
id: wu_apply_plan_limits
title: Filter - wu_apply_plan_limits
sidebar_label: wu_apply_plan_limits
_i18n_hash: bd9ef0fee7898150c2b822a714f498c1
---
# Filter: wu_apply_plan_limits

প্লাগইন ডেভেলপারদের সীমাবদ্ধতাগুলো বাইপাস করার সুযোগ দেয়।

আপনি এই ফিল্টারটি ব্যবহার করে যেকোনো সীমাবদ্ধতা কার্যকর হওয়ার আগে আপনার নিজস্ব কোড চালাতে পারবেন। যদি ফিল্টারটি কোনো ট্রুথি (truthy) মান রিটার্ন করে, তবে প্রক্রিয়াটি এগিয়ে যাবে। আর যদি এটি কোনো ফলসি (falsy) মান রিটার্ন করে, তবে কোডটি ফিরে আসবে এবং নিচের কোনো হুকই চলবে না।

### Since

- 1.7.0
### Source

- [`inc/limits/class-post-type-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-post-type-limits.php#L52)-এ লাইন ৫২-এ সংজ্ঞায়িত
- [`inc/limits/class-di&#115;k-space-limits.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/limits/class-di%73k-space-limits.php#L98)-এ লাইন ৯৮-এ সংজ্ঞায়িত
## Returns
