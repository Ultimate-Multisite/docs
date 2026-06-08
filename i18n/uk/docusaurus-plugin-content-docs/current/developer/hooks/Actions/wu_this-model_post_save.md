---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

Виконується після збереження об'єкта в базу даних.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | Дані об'єкта, які будуть збережені. |
| $this | `\Base_Model` | Екземпляр об'єкта. |
| $new | `bool` | `True`, якщо об'єкт є новим. |

### З версії

- 2.0.0
### Джерело

- Визначено в [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) на рядку 624
- Визначено в [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) на рядку 1754
