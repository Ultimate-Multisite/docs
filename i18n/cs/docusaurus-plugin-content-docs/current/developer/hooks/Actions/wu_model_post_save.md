---
id: wu_model_post_save
title: Akce - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

Spouští se po uložení objektu do databáze.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $model | `string` | Slug modelu. |
| $data | `array` | Data objektu, která budou uložena a sérializována. |
| $data_unserialized | `array` | Data objektu, která budou uložena. |
| $this | `\Base_Model` | Instanci objektu. |

### Od

- 2.0.0
### Zdroj

- Definováno v [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) na řádku 613
- Definováno v [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) na řádku 1743
