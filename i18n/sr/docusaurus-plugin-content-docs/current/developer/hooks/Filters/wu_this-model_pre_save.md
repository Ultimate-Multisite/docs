---
id: wu_this-model_pre_save
title: 'Филтер - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

Филтрира податке објекта пре него што се сачувају у базу података.

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $data | `array` | Подаци објекта који ће бити сачувани, серијализовани. |
| $data_unserialized | `array` | Подаци објекта који ће бити сачувани. |
| $this | `\Base_Model` | Инстанца објекта. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) у реду 570
