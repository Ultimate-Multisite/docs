---
id: wu_mt_provider_log
title: অ্যাকশন - wu_mt_provider_log
sidebar_label: wu_mt_provider_log
_i18n_hash: 49cbf31c8fe84b408e663e8a9587de58
---
# Action: wu_mt_provider_log

যখন কোনো প্রোভাইডার একটি মেসেজ লগ করে, তখন এই অ্যাকশনটি কার্যকর হয়।

## প্যারামিটারসমূহ

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $message | `string` | লগ মেসেজ। |
| $level | `string` | লগ লেভেল। |
| $context | `array` | অতিরিক্ত কনটেক্সট। |

### শুরু

- 1.0.0
### উৎস

[`inc/providers/class-base-provider.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-multi-tenancy/blob/main/inc/providers/class-base-provider.php#L400) এর লাইন ৪০0 এ সংজ্ঞায়িত।
