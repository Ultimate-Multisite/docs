---
id: wu_model_post_save
title: Action - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Action: wu_model_post_save {#action-wumodelpostsave}

Виконується після збереження об'єкта в базу даних.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $model | `string` | Слог моделі. |
| $data | `array` | Дані об'єкта, які будуть збережені та серіалізовані. |
| $data_unserialized | `array` | Дані об'єкта, які будуть збережені. |
| $this | `\Base_Model` | Екземпляр об'єкта. |

### Since {#since}

- 2.0.0
### Source {#source}

- Визначено в [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) на рядку 613
- Визначено в [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) на рядку 1743
