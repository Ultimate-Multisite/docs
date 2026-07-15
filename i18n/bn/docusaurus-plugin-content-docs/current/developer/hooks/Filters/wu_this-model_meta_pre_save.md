---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

এই ফিল্টারটি ডেটাবেসে সংরক্ষণ করার আগে ডেটা মেটা ফিল্টার করে।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | বিবরণ |
|------|------|-------------|
| $meta | `array` | যে মেটা ডেটাটি সংরক্ষণ করা হবে, সেটি আনসিরিয়ালাইজ করা হয়েছে। |
| $data_unserialized | `array` | যে অবজেক্ট ডেটাটি সংরক্ষণ করা হবে। |
| $this | `\Base_Model` | অবজেক্টের ইনস্ট্যান্স। |

### শুরু {#since}

- 2.0.0
### উৎস {#source}

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534)-এ লাইন ৫৩৪ তে সংজ্ঞায়িত করা হয়েছে।
