---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Фильтр: wu_\{$this->model\}_pre_save

Фильтрует данные объекта до того, как они будут сохранены в базе данных.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $data | `array` | Данные объекта, которые будут сохранены, сериализованные. |
| $data_unserialized | `array` | Данные объекта, которые будут сохранены. |
| $this | `\Base_Model` | Экземпляр объекта. |

### С версии

- 2.0.0

### Источник

Определено в [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) на строке 570
