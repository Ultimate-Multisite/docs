---
id: wu_this-model_meta_pre_save
title: 'Филтер - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Филтрира meta податке пре него што буду серијализовани ради чувања у базу података.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $meta | `array` | Meta подаци који ће бити сачувани, несеријализованисеријализовани. |
| $data_unserialized | `array` | Подаци објекта који ће бити сачувани. |
| $this | `\Base_Model` | Инстанца објекта. |

### Од верзије {#since}

- 2.0.0
### Извор {#source}

Дефинисано у [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) у реду 534
