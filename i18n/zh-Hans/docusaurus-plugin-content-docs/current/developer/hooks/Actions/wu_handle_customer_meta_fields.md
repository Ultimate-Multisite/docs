---
id: wu_handle_customer_meta_fields
title: 操作 - wu_handle_customer_meta_fields
sidebar_label: wu_handle_customer_meta_fields
_i18n_hash: a93030d6a7965ebed83579b198381fa8
---
# 动作：wu_handle_customer_meta_fields

允许插件开发者在需要时以不同方式保存元数据。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $meta_repository | `array` | 元字段列表，键 => 值结构化。 |
| $customer | `\Customer` | Ultimate Multisite 客户对象。 |
| $checkout | `\Checkout` | 结账类。 |

### 自

- 2.0.0

### 来源

定义在 [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1211) 的第 1211 行
