---
id: wu_this-model_pre_save
title: 'Suodatin - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

Suodattaa objektin tiedot ennen kuin ne tallennetaan tietokantaan.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $data | `array` | Objektin tiedot, jotka tallennetaan serialisoituina. |
| $data_unserialized | `array` | Objektin tiedot, jotka tallennetaan. |
| $this | `\Base_Model` | Objektin instanssi. |

### Alkaen versiosta {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) rivillä 570
