---
id: wu_model_post_save
title: Действие - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# Действие: wu_model_post_save

Вызывается после того, как объект сохранен в базе данных.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $model | `string` | Слаг модели. |
| $data | `array` | Данные объекта, которые будут сохранены, сериализованные. |
| $data_unserialized | `array` | Данные объекта, которые будут сохранены. |
| $this | `\Base_Model` | Экземпляр объекта. |

### С версии

- 2.0.0

### Источник

- Определено в [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613) на строке 613
- Определено в [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743) на строке 1743
