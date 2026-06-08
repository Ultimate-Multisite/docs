---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

Filtrerar objektdata innan den sparas i databasen.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $data | `array` | Objektdata som ska sparas, serialiseras. |
| $data_unserialized | `array` | Objektdata som ska sparas. |
| $this | `\Base_Model` | Objektinstansen. |

### Sedan

- 2.0.0
### Källa

Definieras i [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) på rad 570
