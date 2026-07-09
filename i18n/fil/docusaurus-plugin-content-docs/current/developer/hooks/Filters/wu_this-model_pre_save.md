---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save {#filter-wuthis-modelpresave}

Sinusuri (o binabago) nito ang data ng object bago pa man ito i-save sa database.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | Ang data ng object na ise-save, na naka-serialize. |
| $data_unserialized | `array` | Ang data ng object na ise-save. |
| $this | `\Base_Model` | Ang instance ng object. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) at line 570
