---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Фильтр: wu_\{$this->model\}_meta_pre_save

Фильтрует метаданные перед их сериализацией для сохранения в базе данных.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $meta | `array` | Метаданные, которые будут сохранены, десериализованные. |
| $data_unserialized | `array` | Данные объекта, которые будут сохранены. |
| $this | `\Base_Model` | Экземпляр объекта. |

### Начиная с

- 2.0.0

### Источник

Определено в [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) на строке 534
