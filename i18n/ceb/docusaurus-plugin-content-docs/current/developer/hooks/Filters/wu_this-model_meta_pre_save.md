---
id: wu_this-model_meta_pre_save
title: 'Salaan - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Gi-filter ang data meta sa dili pa kini i-serialize aron itipig sa database.

## Mga Parameter

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $meta | `array` | Ang meta data nga itipig, unserializedserialized. |
| $data_unserialized | `array` | Ang data sa object nga itipig. |
| $this | `\Base_Model` | Ang instance sa object. |

### Sukad

- 2.0.0
### Tinubdan

Gihubit sa [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) sa linya 534
