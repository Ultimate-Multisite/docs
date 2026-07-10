---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

Filtruje meta údaje pred ich serializáciou na uloženie do databázy.

## Parametre {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | Meta údaje, ktoré budú uložené, unserializedserialized. |
| $data_unserialized | `array` | Údaje objektu, ktoré budú uložené. |
| $this | `\Base_Model` | Inštancia objektu. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) na riadku 534
