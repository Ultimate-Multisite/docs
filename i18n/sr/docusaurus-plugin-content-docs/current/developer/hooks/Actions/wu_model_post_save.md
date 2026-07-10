---
id: wu_model_post_save
title: Радња - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save {#action-wumodelpostsave}

Покреће се након што се објекат сачува у базу података.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | Слаг модела. |
| $data | `array` | Подаци објекта који ће бити сачувани, серијализовани. |
| $data_unserialized | `array` | Подаци објекта који ће бити сачувани. |
| $this | `\Base_Model` | Инстанца објекта. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

- Дефинисано у [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) у реду 613
- Дефинисано у [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) у реду 1743
