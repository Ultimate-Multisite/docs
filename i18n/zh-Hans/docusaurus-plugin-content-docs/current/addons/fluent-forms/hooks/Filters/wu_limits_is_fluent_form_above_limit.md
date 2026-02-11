---
id: wu_limits_is_fluent_form_above_limit
title: Filter - wu_limits_is_fluent_form_above_limit
sidebar_label: wu_limits_is_fluent_form_above_limit
_i18n_hash: 8fd05176d097f0d8576b5656778bd633
---
# 过滤器: wu_limits_is_fluent_form_above_limit

检查给定表单类型是否允许在此计划中使用，允许插件开发者过滤返回值

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $value | `bool` | 表单类型是否超过限制 |
| $form_type | `string` | 正在检查的表单类型 |
| $form_count | `int` | 当前表单计数 |
| $quota | `int` | 允许的配额 |

### 版本

- 1.0.0

### 源码

- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L56) at line 56
- Defined in [`inc/limitations/class-limit-fluent-forms.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-fluent-forms/blob/main/inc/limitations/class-limit-fluent-forms.php#L89) at line 89
