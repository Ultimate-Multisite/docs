---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

এই ফিল্টৰটোৱে ডেটাবেছত সংৰক্ষণ কৰাৰ আগতে মেটা ডেটা (meta data) ফিল্টাৰ কৰে।

## প্যারামিটাৰসমূহ (Parameters)

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | যি মেটা ডেটা সংৰক্ষণ কৰা হ'ব, সেয়া (unserialized)। |
| $data_unserialized | `array` | যি অবজেক্ট ডেটা সংৰক্ষণ কৰা হ'ব। |
| $this | `\Base_Model` | অবজেক্ট ইনষ্টেঞ্চ (object instance)। |

### Since

- 2.0.0
### Source

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) ফাইলৰ ৫৩৪ নং লাইনত সংজ্ঞায়িত কৰা হৈছে।
