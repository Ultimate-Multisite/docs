---
id: wu_this-model_pre_save
title: 'Filter – wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save {#filter-wuthis-modelpresave}

Filtruje údaje objektu pred ich uložením do databázy.

## Parametre {#parameters}

| Názov | Typ | Popis |
|------|------|-------------|
| $data | `array` | Údaje objektu, ktoré budú uložené, serializované. |
| $data_unserialized | `array` | Údaje objektu, ktoré budú uložené. |
| $this | `\Base_Model` | Inštancia objektu. |

### Od verzie {#since}

- 2.0.0
### Zdroj {#source}

Definované v [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) na riadku 570
