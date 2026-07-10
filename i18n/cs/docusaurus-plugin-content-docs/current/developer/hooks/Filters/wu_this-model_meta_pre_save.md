---
id: wu_this-model_meta_pre_save
title: 'Filtrační metoda - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save {#filter-wuthis-modelmetapresave}

Filtruje data meta před jejich sérializací pro uložení do databáze.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $meta | `array` | Meta data, která budou uložena, po unserializaci. |
| $data_unserialized | `array` | Objektová data, která budou uložena. |
| $this | `\Base_Model` | Instancí objektu. |

### Od {#since}

- 2.0.0
### Zdroj {#source}

Definováno v [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) na řádku 534
