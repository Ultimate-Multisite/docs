---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

ব্যবহারকারী এজেন্টের যাচাইকরণ (user agent verification) প্রয়োগ করা হবে কি না, তা ফিল্টার করে।

এটিকে `false` সেট করলে টোকেনগুলি বিভিন্ন ব্রাউজার বা ডিভাইসে কাজ করতে পারবে। এতে নিরাপত্তার কিছুটা ক্ষতি হলেও ব্যবহারযোগ্যতা অনেক বেড়ে যায়।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | ব্যবহারকারী এজেন্টের মিল (matching) প্রয়োগ করা হবে কি না। |

### শুরু {#since}

- 2.0.0
### উৎস {#source}

এটি [inc/sso/class-magic-link.php](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410)-এ লাইন ৪১০-এ সংজ্ঞায়িত করা হয়েছে।
