---
id: wu_this-model_meta_pre_save
title: 'Filtar - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Filtrira meta podatke prije nego što se serijaliziraju za pohranu u bazu podataka.

## Parametri

| Naziv | Tip | Opis |
|------|------|-------------|
| $meta | `array` | Meta podaci koji će biti pohranjeni, neserijaliziraniserijalizirani. |
| $data_unserialized | `array` | Podaci objekta koji će biti pohranjeni. |
| $this | `\Base_Model` | Instanca objekta. |

### Od verzije

- 2.0.0
### Izvor

Definirano u [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) u retku 534
