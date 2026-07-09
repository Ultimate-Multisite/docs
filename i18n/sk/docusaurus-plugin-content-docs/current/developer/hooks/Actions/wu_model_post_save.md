---
id: wu_model_post_save
title: Akcia - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

Spustí sa po uložení objektu do databázy.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $model | `string` | Slug modelu. |
| $data | `array` | Dáta objektu, ktoré budú uložené, serializované. |
| $data_unserialized | `array` | Dáta objektu, ktoré budú uložené. |
| $this | `\Base_Model` | Inštancia objektu. |

### Od verzie

- 2.0.0
### Zdroj

- Definované v [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) na riadku 613
- Definované v [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) na riadku 1743
