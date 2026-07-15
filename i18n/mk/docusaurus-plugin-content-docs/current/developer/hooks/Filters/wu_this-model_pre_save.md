---
id: wu_this-model_pre_save
title: 'Филтер - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

Ги филтрира податоците на објектот пред да се зачуваат во базата на податоци.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $data | `array` | Податоците на објектот што ќе бидат зачувани, серијализирани. |
| $data_unserialized | `array` | Податоците на објектот што ќе бидат зачувани. |
| $this | `\Base_Model` | Инстанцата на објектот. |

### Од верзија {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) на линија 570
