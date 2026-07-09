---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Filtrerer data-meta, før den serialiseres for at blive gemt i databasen.

## Parametre

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | De metadata, der vil blive gemt, userialiseret/serialiseret. |
| $data_unserialized | `array` | De objektdata, der vil blive gemt. |
| $this | `\Base_Model` | Objektinstansen. |

### Siden

- 2.0.0
### Kilde

Defineret i [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) på linje 534
