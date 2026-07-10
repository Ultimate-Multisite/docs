---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save {#filter-wuthis-modelpresave}

Filtrira podatke objekta prije nego što se oni sačuvaju u bazu podataka.

## Parametri {#parameters}

| Ime | Tip | Opis |
|------|------|-------------|
| $data | `array` | Podaci objekta koji će biti sačuvani, serijalizovani. |
| $data_unserialized | `array` | Podaci objekta koji će biti sačuvani. |
| $this | `\Base_Model` | Instanca objekta. |

### Od {#since}

- 2.0.0
### Izvor {#source}

Definisano je u [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) na liniji 570
