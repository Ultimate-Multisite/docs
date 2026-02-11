---
id: wu_this-model_pre_save
title: 'Filter - wu_{$this->model}_pre_save'
sidebar_label: 'wu_{$this->model}_pre_save'
_i18n_hash: f6ea53d0f7e4e9b0319f042187095577
---
# Filter: wu_\{$this->model\}_pre_save

在将对象数据存储到数据库之前进行过滤。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | 将被存储的对象数据，已序列化。 |
| $data_unserialized | `array` | 将被存储的对象数据。 |
| $this | `\Base_Model` | 对象实例。 |

### Since

- 2.0.0

### Source

在 [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L570) 第 570 行定义
