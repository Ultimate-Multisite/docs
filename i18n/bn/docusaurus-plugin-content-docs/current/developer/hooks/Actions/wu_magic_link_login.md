---
id: wu_magic_link_login
title: Action - wu_magic_link_login
sidebar_label: wu_magic_link_login
_i18n_hash: 4682ae341c1806000c2d4ca3f0af0b2e
---
# অ্যাকশন: wu_magic_link_login {#action-wumagiclinklogin}

যখন কোনো ব্যবহারকারী ম্যাজিক লিঙ্কের মাধ্যমে লগইন করেন, তখন এটি কার্যকর হয়।

## প্যারামিটারসমূহ {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $user_id | `int` | ব্যবহারকারীর আইডি। |
| $site_id | `int` | সাইট আইডি। |

### শুরু {#since}

- 2.0.0
### উৎস {#source}

[`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L240)-এ সংজ্ঞায়িত করা হয়েছে, লাইন ২৪০-এ।
