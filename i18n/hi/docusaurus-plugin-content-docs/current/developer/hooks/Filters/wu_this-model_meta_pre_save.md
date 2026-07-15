---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

यह डेटा मेटा को फ़िल्टर करता है इससे पहले कि इसे डेटाबेस में स्टोर करने के लिए सीरियलाइज़ किया जाए।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | वह मेटा डेटा जो स्टोर किया जाएगा, जिसे अनसीरियलाइज़्ड (unserialized) किया जाएगा। |
| $data_unserialized | `array` | वह ऑब्जेक्ट डेटा जो स्टोर किया जाएगा। |
| $this | `\Base_Model` | ऑब्जेक्ट का इंस्टेंस। |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) at line 534
