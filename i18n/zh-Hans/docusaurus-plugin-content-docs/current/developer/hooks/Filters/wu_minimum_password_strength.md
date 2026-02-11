---
id: wu_minimum_password_strength
title: 过滤器 - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# 过滤：wu_minimum_password_strength

过滤所需的最小密码强度（zxcvbn 分数）。

强度级别：- 0, 1：非常弱 - 2：弱 - 3：中等 - 4：强（默认）

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $min_strength | `int` | 所需的最小强度级别。 |
| $strength_setting | `string` | 管理员设置值（medium, strong, super_strong）。 |

### 自

- 2.4.0

### 来源

定义在 [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) 的第 516 行
