---
id: wu_this-model_meta_pre_save
title: 'Filter - wu_{$this->model}_meta_pre_save'
sidebar_label: 'wu_{$this->model}_meta_pre_save'
_i18n_hash: bd7ee30a03af6a465129c990e5cded7e
---
# Filter: wu_\{$this->model\}_meta_pre_save

在将数据元序列化并存储到数据库之前过滤数据元。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $meta | `array` | 将要存储的元数据，未序列化/已序列化。 |
| $data_unserialized | `array` | 将要存储的对象数据。 |
| $this | `\Base_Model` | 对象实例。 |

### Since

- 2.0.0

### Source

Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L534) at line 534
