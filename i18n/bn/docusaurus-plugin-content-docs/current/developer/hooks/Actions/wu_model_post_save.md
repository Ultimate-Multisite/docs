---
id: wu_model_post_save
title: অ্যাকশন - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

একটি অবজেক্ট ডেটাবেসে সংরক্ষণ করার পরে এটি ট্রিগার হয়।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | বিবরণ |
|------|------|-------------|
| $model | `string` | মডেল স্ল্যাগ। |
| $data | `array` | অবজেক্ট ডেটা যা সংরক্ষণ করা হবে, সিরিয়ালাইজ করা হয়েছে। |
| $data_unserialized | `array` | অবজেক্ট ডেটা যা সংরক্ষণ করা হবে। |
| $this | `\Base_Model` | অবজেক্টের ইনস্ট্যান্স। |

### শুরু {#since}

- 2.0.0
### উৎস {#source}

- [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) ফাইলে লাইন ৬১৩-এ সংজ্ঞায়িত করা হয়েছে
- [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) ফাইলে লাইন ১৭৪৩-এ সংজ্ঞায়িত করা হয়েছে
