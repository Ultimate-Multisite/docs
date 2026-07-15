---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

Filtrira podatke objekta, preden se shranijo v zbirko podatkov.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $data | `array` | Podatki objekta, ki bodo shranjeni, serializirani. |
| $data_unserialized | `array` | Podatki objekta, ki bodo shranjeni. |
| $this | `\Base_Model` | Instanca objekta. |

### Od različice {#since}

- 2.0.0
### Vir {#source}

Definirano v [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) v vrstici 570
