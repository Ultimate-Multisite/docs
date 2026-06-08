---
id: wu_this-model_post_save
title: 'Action - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

Изпуска се след като обектът бъде запазен в базата данни.

## Параметри

| Име | Тип | Описание |
|------|------|-------------|
| $data | `array` | Данните на обекта, които ще бъдат запазени. |
| $this | `\Base_Model` | Инстанцията на обекта. |
| $new | `bool` | Истинско, ако обектът е нов. |

### От

- 2.0.0
### Източник

- Дефиниран в [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) на линия 624
- Дефиниран в [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) на линия 1754
