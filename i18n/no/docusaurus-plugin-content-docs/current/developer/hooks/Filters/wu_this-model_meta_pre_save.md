---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

Filtrerer meta-dataene før de serialiseres og lagres i databasen.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $meta | `array` | Meta-dataene som skal lagres, unserialiserte. |
| $data_unserialized | `array` | Objektdataene som skal lagres. |
| $this | `\Base_Model` | Objektinstansen. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) på linje 534
