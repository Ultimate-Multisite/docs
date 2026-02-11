---
id: wu_model_post_save
title: 动作 - wu_model_post_save
sidebar_label: wu_model_post_save
_i18n_hash: dd2afb7dda9751cf6d2e2f8e0ff2b428
---
# 动作: wu_model_post_save

在对象存储到数据库后触发。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $model | `string` | 模型 slug。 |
| $data | `array` | 将被存储的对象数据，已序列化。 |
| $data_unserialized | `array` | 将被存储的对象数据。 |
| $this | `\Base_Model` | 对象实例。 |

### 版本

- 2.0.0

### 源码

- 在 `inc/models/class-base-model.php`（https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-base-model.php#L613）第 613 行定义
- 在 `inc/models/class-site.php`（https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-site.php#L1743）第 1743 行定义
