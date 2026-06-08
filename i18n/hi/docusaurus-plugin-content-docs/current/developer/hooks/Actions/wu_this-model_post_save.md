---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

जब कोई ऑब्जेक्ट डेटाबेस में स्टोर हो जाता है, तो यह एक्शन ट्रिगर होता है।

## पैरामीटर्स

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | वह ऑब्जेक्ट डेटा जिसे स्टोर किया जाएगा। |
| $this | `\Base_Model` | ऑब्जेक्ट का इंस्टेंस। |
| $new | `bool` | यदि ऑब्जेक्ट नया है तो True। |

### कब से उपलब्ध

- 2.0.0
### स्रोत

- [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) में लाइन 624 पर परिभाषित
- [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) में लाइन 1754 पर परिभाषित
