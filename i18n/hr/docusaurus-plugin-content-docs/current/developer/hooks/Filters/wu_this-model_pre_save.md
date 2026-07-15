---
id: wu_this-model_pre_save
title: 'Filtar - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

Filtrira podatke objekta prije nego što se pohrane u bazu podataka.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $data | `array` | Podaci objekta koji će biti pohranjeni, serijalizirani. |
| $data_unserialized | `array` | Podaci objekta koji će biti pohranjeni. |
| $this | `\Base_Model` | Instanca objekta. |

### Od {#since}

- 2.0.0
### Izvor {#source}

Definirano u [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) u retku 570
