---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

డేటాబేస్‌లో నిల్వ చేయడానికి ముందు, డేటా మెటాను (data meta) ఫిల్టర్ చేస్తుంది.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | నిల్వ చేయబడే మెటా డేటా. ఇది సీరియలైజ్ చేయబడిన (serialized) రూపంలో ఉంటుంది. |
| $data_unserialized | `array` | నిల్వ చేయబడే ఆబ్జెక్ట్ డేటా. |
| $this | `\Base_Model` | ఆబ్జెక్ట్ యొక్క ఉదాహరణ (object instance). |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) at line 534
