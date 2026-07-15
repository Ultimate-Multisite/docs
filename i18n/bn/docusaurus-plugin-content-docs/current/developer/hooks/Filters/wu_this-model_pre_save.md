---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

এই ফিল্টারটি ডেটাবেসে সংরক্ষণ করার আগে অবজেক্ট ডেটা ফিল্টার করে।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | যে অবজেক্ট ডেটাটি সংরক্ষণ করা হবে, সিরিয়ালাইজড। |
| $data_unserialized | `array` | যে অবজেক্ট ডেটাটি সংরক্ষণ করা হবে। |
| $this | `\Base_Model` | অবজেক্টের ইনস্ট্যান্স। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570)-এ লাইন ৫৭0-এ সংজ্ঞায়িত করা হয়েছে।
