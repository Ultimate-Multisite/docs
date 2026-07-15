---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Filtrira meta podatke prije nego što se serijalizuju i sačuvaju u bazu podataka.

## Parametri {#parameters}

| Name | Type | Opis |
|------|------|-------------|
| $meta | `array` | Meta podaci koji će se sačuvati, de-serijalizovani. |
| $data_unserialized | `array` | Podaci objekta koji će se sačuvati. |
| $this | `\Base_Model` | Instanca objekta. |

### Od verzije {#since}

- 2.0.0
### Izvor {#source}

Definisano je u [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) na liniji 534
