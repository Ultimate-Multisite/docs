---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Фільтр: wu_\{$this->model\}_meta_pre_save

Фільтрує метадані перед їх серіалізацією та збереженням у базу даних.

## Параметри

| Ім'я | Тип | Опис |
|------|------|-------------|
| $meta | `array` | Метадані, які будуть збережені, десеріалізовані. |
| $data_unserialized | `array` | Об'єктні дані, які будуть збережені. |
| $this | `\Base_Model` | Екземпляр об'єкта. |

### Зверніть увагу

- 2.0.0
### Джерело

Визначено в [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) у рядку 534
