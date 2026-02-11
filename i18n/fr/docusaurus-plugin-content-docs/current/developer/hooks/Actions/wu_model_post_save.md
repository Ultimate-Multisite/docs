---
id: wu_model_post_save
title: Action - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save

Se déclenche après qu'un objet a été stocké dans la base de données.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $model | `string` | Le slug du modèle. |
| $data | `array` | Les données de l'objet qui seront stockées, sérialisées. |
| $data_unserialized | `array` | Les données de l'objet qui seront stockées. |
| $this | `\Base_Model` | L'instance de l'objet. |

### Depuis

- 2.0.0

### Source

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) at line 613
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) at line 1743
