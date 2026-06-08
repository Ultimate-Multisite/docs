---
id: wu_this-model_pre_save
title: 'Филтър - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

Филтрира данните на обекта, преди те да бъдат запазени в базата данни.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | Данните на обекта, които ще бъдат запазени и сериализирани. |
| $data_unserialized | `array` | Данните на обекта, които ще бъдат запазени. |
| $this | `\Base_Model` | Инстанцията на обекта. |

### От версия

- 2.0.0
### Източник

Дефиниран в [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) на линия 570
