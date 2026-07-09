---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

Filtrira meta podatke, preden se serializirajo za shranjevanje v podatkovno zbirko.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $meta | `array` | Meta podatki, ki bodo shranjeni, unserializedserialized. |
| $data_unserialized | `array` | Podatki objekta, ki bodo shranjeni. |
| $this | `\Base_Model` | Instanca objekta. |

### Od različice {#since}

- 2.0.0
### Vir {#source}

Definirano v [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) v vrstici 534
