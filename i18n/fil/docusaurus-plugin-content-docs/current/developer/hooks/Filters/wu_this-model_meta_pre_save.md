---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Sinasala (filters) nito ang data meta bago ito i-serialize at itago sa database.

## Mga Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | Ang meta data na itatago, bago pa ito i-serialize. |
| $data_unserialized | `array` | Ang object data na itatago. |
| $this | `\Base_Model` | Ang instance ng object. |

### Mula pa noong {#since}

- 2.0.0
### Pinagmulan {#source}

Tinukoy sa [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) sa linya 534
