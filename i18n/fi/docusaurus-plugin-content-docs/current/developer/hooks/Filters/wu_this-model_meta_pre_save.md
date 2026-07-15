---
id: wu_this-model_meta_pre_save
title: 'Suodatin - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Suodattaa data-metatiedot ennen kuin ne serialisoidaan tietokantaan tallennettaviksi.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $meta | `array` | Metatiedot, jotka tallennetaan, unserializedserialized. |
| $data_unserialized | `array` | Objektin tiedot, jotka tallennetaan. |
| $this | `\Base_Model` | Objekti-instanssi. |

### Alkaen {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) rivillä 534
