---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Filtrerar meta-data innan den serialiseras och sparas i databasen.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $meta | `array` | Meta-data som ska sparas, oserialiserad. |
| $data_unserialized | `array` | Objektdata som ska sparas. |
| $this | `\Base_Model` | Objektinstansen. |

### Sedan {#since}

- 2.0.0
### Källa {#source}

Definieras i [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) på rad 534
