---
id: wu_enforce_password_rules
title: 过滤器 - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# 过滤: wu_enforce_password_rules

过滤是否强制执行额外的密码规则。

当为 true 时，强制执行最小长度和字符要求。对于“Super Strong”设置或 Defender Pro 的强密码功能启用时会自动启用。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $enforce_rules | `bool` | 是否强制执行额外规则。 |
| $strength_setting | `string` | 管理员设置值。 |
| $defender_active | `bool` | Defender Pro 强密码功能是否启用。 |

### 自

- 2.4.0

### 来源

定义于 [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) 在第 531 行
