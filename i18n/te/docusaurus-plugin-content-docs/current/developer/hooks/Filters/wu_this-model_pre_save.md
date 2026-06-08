---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

డేటాబేస్‌లో నిల్వ చేయడానికి ముందు ఆ ఆబ్జెక్ట్ డేటాను ఫిల్టర్ చేస్తుంది.

## పారామీటర్లు

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | నిల్వ చేయబడే, సీరియలైజ్ చేయబడిన ఆబ్జెక్ట్ డేటా. |
| $data_unserialized | `array` | నిల్వ చేయబడే ఆబ్జెక్ట్ డేటా. |
| $this | `\Base_Model` | ఆబ్జెక్ట్ ఉదాహరణ (object instance). |

### ఎప్పటి నుండి

- 2.0.0
### మూలం

[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) లోని 570వ లైన్‌లో నిర్వచించబడింది
