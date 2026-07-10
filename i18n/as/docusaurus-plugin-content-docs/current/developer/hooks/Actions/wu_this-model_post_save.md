---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save {#action-wuthis-modelpostsave}

যেতিয়া কোনো অবজেক্ট ডেটাবেसमा সেভ হয়, তেতিয়া এই অ্যাকশনটো ট্ৰিগাৰ হয়।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | বৰ্ণনা |
|------|------|-------------|
| $data | `array` | যি অবজেক্ট ডেটা ডেটাবেसमा ষ্ট’ৰ কৰা হ'ব। |
| $this | `\Base_Model` | অবজেক্টটোৰ প্ৰতিলিপি (object instance)। |
| $new | `bool` | যদি অবজেক্টটো নতুন হয়, তেন্তে `True`। |

### কিমানৰ পৰা {#since}

- 2.0.0
### উৎস {#source}

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) at line 624
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) at line 1754
