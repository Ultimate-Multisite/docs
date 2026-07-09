---
id: wu_this-model_meta_pre_save
title: 'Saring - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Nyaring meta data sadurunge diserialisasi kanggo disimpen menyang database.

## Paramèter

| Jeneng | Jinis | Katrangan |
|------|------|-------------|
| $meta | `array` | Meta data sing bakal disimpen, unserializedserialized. |
| $data_unserialized | `array` | Data obyek sing bakal disimpen. |
| $this | `\Base_Model` | Instance obyek. |

### Wiwit

- 2.0.0
### Sumber

Ditetepake ing [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) ing baris 534
