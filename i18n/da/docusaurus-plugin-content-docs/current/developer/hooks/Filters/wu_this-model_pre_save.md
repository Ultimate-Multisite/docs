---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

Filtrerer objektdataene, før de gemmes i databasen.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $data | `array` | Objektdataene, der vil blive gemt, serialiseret. |
| $data_unserialized | `array` | Objektdataene, der vil blive gemt. |
| $this | `\Base_Model` | Objektinstansen. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) på linje 570
