---
id: wu_this-model_post_delete
title: 'Action - wu_{$this->model}_post_delete'
sidebar_label: 'wu_{$this->model}_post_delete'
_i18n_hash: 723d566c67fd82808273b2eb42c96d73
---
# Action: wu_\{$this->model\}_post_delete

যেতিয়া এটা অবজেক্ট ডেটাবেसमा সেভ (store) কৰা হয়, তেতিয়া এই অ্যাকশনটো ট্ৰিগাৰ (fire) হয়।

## প্যারামিটারসমূহ {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | যদি অবজেক্টটো সফলভাৱে ডিলিট কৰা হৈছে, তেন্তে `True` হ'ব। |
| $this | `\Base_Model` | অবজেক্টটোৰ প্ৰতিলিপি (instance)। |

### কিমানৰ পৰা {#since}

- 2.0.0
### উৎস {#source}

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L663) at line 663
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1503) at line 1503
