---
id: signup_get_available_languages
title: 过滤器 - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: 8e47c618635cf9564c3c2d2864b47529
---
# 筛选器： signup_get_available_languages

筛选前端站点注册可用语言列表。

向此钩子传递空数组将禁用注册表单上该设置的输出，并在创建站点时使用默认语言。尚未安装的语言将被移除。

## 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $available_languages | `array` | 可用语言。 |

### 自

- 4.4.0
### 来源

定义于 [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L117) 第 117 行
