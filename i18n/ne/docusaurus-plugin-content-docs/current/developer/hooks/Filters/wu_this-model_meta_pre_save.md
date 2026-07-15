---
id: wu_this-model_meta_pre_save
title: 'फिल्टर - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

डेटा meta लाई database मा भण्डारण गर्न serialized हुनु अघि filter गर्छ।

## प्यारामिटरहरू {#parameters}

| नाम | प्रकार | विवरण |
|------|------|-------------|
| $meta | `array` | भण्डारण गरिने meta data, unserializedserialized। |
| $data_unserialized | `array` | भण्डारण गरिने object data। |
| $this | `\Base_Model` | object instance। |

### देखि {#since}

- 2.0.0
### स्रोत {#source}

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) मा परिभाषित, लाइन 534 मा
