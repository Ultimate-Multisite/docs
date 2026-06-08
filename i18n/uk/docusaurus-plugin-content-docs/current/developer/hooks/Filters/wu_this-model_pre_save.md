---
id: wu_this-model_pre_save
title: 'Фільтр - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Фільтр: wu_\{$this->model\}_pre_save

Фільтрує дані об'єкта перед їх збереженням у базу даних.

## Параметри

| Ім'я | Тип | Опис |
|------|------|-------------|
| $data | `array` | Дані об'єкта, які будуть збережені та серіалізовані. |
| $data_unserialized | `array` | Дані об'єкта, які будуть збережені. |
| $this | `\Base_Model` | Екземпляр об'єкта. |

### Зверніть увагу

- 2.0.0
### Джерело

Визначено у [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) на рядку 570
