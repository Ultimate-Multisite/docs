---
id: wu_this-model_meta_pre_save
title: 'Isihluzi - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Ihluza i-data meta ngaphambi kokuba yenziwe serialized ukuze igcinwe kwi-database.

## Iiparamitha {#parameters}

| Igama | Uhlobo | Inkcazelo |
|------|------|-------------|
| $meta | `array` | I-meta data eza kugcinwa, unserializedserialized. |
| $data_unserialized | `array` | I-data ye-object eza kugcinwa. |
| $this | `\Base_Model` | I-instance ye-object. |

### Ukusukela {#since}

- 2.0.0
### Umthombo {#source}

Ichazwe kwi-[`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) kumgca 534
