---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Действие: wu_${this->model}_post_save

Вызывается после того, как объект сохранён в базе данных.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $data | `array` | Данные объекта, которые будут сохранены. |
| $this | `\Base_Model` | Экземпляр объекта. |
| $new | `bool` | Истина, если объект новый. |

### Начиная с

- 2.0.0

### Источник

- Определено в [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) на строке 624
- Определено в [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) на строке 1754
