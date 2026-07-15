---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

Spouští se po uložení objektu do databáze.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $data | `array` | Data objektu, která budou uložena. |
| $this | `\Base_Model` | Instancí objektu. |
| $new | `bool` | Pravda, pokud je objekt nový. |

### Od verze {#since}

- 2.0.0
### Zdroj {#source}

- Definováno v [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) na řádku 624
- Definováno v [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) na řádku 1754
