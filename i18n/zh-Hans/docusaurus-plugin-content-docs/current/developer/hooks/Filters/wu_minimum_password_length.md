---
id: wu_minimum_password_length
title: 过滤器 - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

过滤最小密码长度。

仅在 wu_enforce_password_rules 为 true 时强制执行。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | 最小密码长度。默认 12（与 Defender Pro 匹配）。 |
| $defender_active | `bool` | Defender Pro 强密码是否启用。 |

### 自

- 2.4.0

### 来源

定义于 [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) at line 543
