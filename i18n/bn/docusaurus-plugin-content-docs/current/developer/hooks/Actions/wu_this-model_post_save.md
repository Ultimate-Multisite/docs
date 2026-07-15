---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

যখন কোনো অবজেক্ট ডেটাবেসে সংরক্ষণ করা হয়, তখন এটি কার্যকর হয়।

## প্যারামিটারসমূহ {#parameters}

| নাম | ধরন | বিবরণ |
|------|------|-------------|
| $data | `array` | যে অবজেক্ট ডেটাবেসে সংরক্ষণ করা হবে। |
| $this | `\Base_Model` | অবজেক্টের ইনস্ট্যান্স। |
| $new | `bool` | যদি অবজেক্টটি নতুন হয় তবে True। |

### শুরু {#since}

- 2.0.0
### উৎস {#source}

- [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) ফাইলে লাইন ৬২৪ এ সংজ্ঞায়িত।
- [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) ফাইলে লাইন ১৭৫৪ এ সংজ্ঞায়িত।
