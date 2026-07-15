---
id: wu_this-model_meta_pre_save
title: 'Филтер - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

Ги филтрира meta податоците пред да бидат серијализирани за да се зачуваат во базата на податоци.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $meta | `array` | Meta податоците што ќе бидат зачувани, несеријализиранисеријализирани. |
| $data_unserialized | `array` | Податоците на објектот што ќе бидат зачувани. |
| $this | `\Base_Model` | Инстанцата на објектот. |

### Од верзија {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) на линија 534
