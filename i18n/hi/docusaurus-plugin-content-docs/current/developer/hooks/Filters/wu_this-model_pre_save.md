---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

यह फ़िल्टर ऑब्जेक्ट डेटा को डेटाबेस में स्टोर होने से पहले फ़िल्टर करता है।

## पैरामीटर्स {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | वह ऑब्जेक्ट डेटा जिसे स्टोर किया जाएगा, सीरियलाइज़ किया जाएगा। |
| $data_unserialized | `array` | वह ऑब्जेक्ट डेटा जिसे स्टोर किया जाएगा। |
| $this | `\Base_Model` | ऑब्जेक्ट का इंस्टेंस। |

### कब से उपलब्ध {#since}

- 2.0.0
### स्रोत {#source}

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) में लाइन 570 पर परिभाषित है।
