---
id: wu_handle_user_meta_fields
title: 操作 - wu_handle_user_meta_fields
sidebar_label: wu_handle_user_meta_fields
_i18n_hash: 6baac0d78046fb58a79bc35865d91372
---
# 动作: wu_handle_user_meta_fields

允许插件开发者在需要时以不同方式保存用户元数据。

## 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $meta_repository | `array` | 元字段列表，键 => 值结构。 |
| $user | `\WP_User` | WordPress 用户对象。 |
| $customer | `\Customer` | Ultimate Multisite 客户对象。 |
| $checkout | `\Checkout` | 结账类。 |

### 版本

- 2.0.4

### 源码

在 [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1244) 第 1244 行定义。
