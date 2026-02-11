---
id: wu_this-model_post_save
title: '动作 - wu_{$this->model}_post_save'
sidebar_label: 'wu_{$this->model}_post_save'
_i18n_hash: d799b8b07a9d78eeaf6a9f4142f23efb
---
# Action: wu_\{$this->model\}_post_save

在对象存储到数据库后触发。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $data | `array` | 将被存储的对象数据。 |
| $this | `\Base_Model` | 对象实例。 |
| $new | `bool` | 如果对象是新的，则为 true。 |

### Since

- 2.0.0

### Source

- Defined in [`inc/models/class-base-model.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L624) at line 624
- Defined in [`inc/models/class-site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1754) at line 1754
