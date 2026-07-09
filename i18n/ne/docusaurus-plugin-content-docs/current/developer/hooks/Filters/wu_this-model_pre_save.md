---
id: wu_this-model_pre_save
title: 'फिल्टर - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

वस्तु डेटा database मा भण्डारण हुनुअघि फिल्टर गर्छ।

## प्यारामिटरहरू

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | भण्डारण गरिने, serialized वस्तु डेटा। |
| $data_unserialized | `array` | भण्डारण गरिने वस्तु डेटा। |
| $this | `\Base_Model` | वस्तु instance। |

### देखि

- 2.0.0
### स्रोत

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) मा 570 औँ लाइनमा परिभाषित गरिएको छ।
