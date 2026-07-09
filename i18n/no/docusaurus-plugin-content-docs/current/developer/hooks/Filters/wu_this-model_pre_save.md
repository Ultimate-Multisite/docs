---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save {#filter-wuthis-modelpresave}

Filtrerer objektdataen før den lagres i databasen.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $data | `array` | Objektdataen som skal lagres, serialisert. |
| $data_unserialized | `array` | Objektdataen som skal lagres. |
| $this | `\Base_Model` | Objektinstansen. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) på linje 570
