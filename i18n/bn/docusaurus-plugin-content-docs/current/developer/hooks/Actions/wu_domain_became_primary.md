---
id: wu_domain_became_primary
title: Action - wu_domain_became_primary
sidebar_label: wu_domain_became_primary
_i18n_hash: c7757c05c88e7b75f88777504426a970
---
# অ্যাকশন: wu_domain_became_primary {#action-wudomainbecameprimary}

যখন কোনো ডোমেইন একটি সাইটের প্রাইমারি ডোমেইন হয়ে যায়, তখন এটি ট্রিগার হয়।

এই অ্যাকশনটি তখন ট্রিগার হয় যখন কোনো ডোমেইনের `primary_domain` ফ্ল্যাগটি `true` সেট করা হয়। এটি হয় যখন একটি নতুন প্রাইমারি ডোমেইন তৈরি করা হয়, অথবা যখন কোনো বিদ্যমান ডোমেইনকে প্রাইমারি করার জন্য আপডেট করা হয়।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | যে ডোমেইনটি প্রাইমারি হয়েছে। |
| $blog_id | `int` | প্রভাবিত সাইটটির ব্লগ আইডি। |
| $was_new | `bool` | এটি নতুন তৈরি করা ডোমেইন কিনা। |

### শুরু {#since}

- 2.0.0
### উৎস {#source}

[`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L560)-এ লাইন ৫৬০-এ সংজ্ঞায়িত করা হয়েছে।
