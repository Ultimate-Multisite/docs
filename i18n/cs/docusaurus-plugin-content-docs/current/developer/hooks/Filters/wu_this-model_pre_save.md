---
id: wu_this-model_pre_save
title: 'Filtrační metoda - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filtr: wu_\{$this->model\}_pre_save

Filtruje data objektu předtím, než jsou uložena do databáze.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $data | `array` | Data objektu, která budou uložena a sérializována. |
| $data_unserialized | `array` | Data objektu, která budou uložena. |
| $this | `\Base_Model` | Instancí objektu. |

### Od verze

- 2.0.0
### Zdroj

Definováno v [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) na řádku 570
