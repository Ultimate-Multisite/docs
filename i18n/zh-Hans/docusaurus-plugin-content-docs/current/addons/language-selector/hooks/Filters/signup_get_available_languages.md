---
id: signup_get_available_languages
title: 过滤器 - signup_get_available_languages
sidebar_label: signup_get_available_languages
_i18n_hash: abfd9a9381c23503be93e034d42f32c8
---
# Filter: signup_get_available_languages

过滤前端站点注册时可用语言的列表。

传递一个空数组给此钩子将禁用注册表单中该设置的输出，并在创建站点时使用默认语言。未安装的语言将被剔除。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $available_languages | `array` | 可用语言。 |

### Since

- 4.4.0

### Source

Defined in [`ultimate-multisite-language-selector.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-language-selector/blob/main/ultimate-multisite-language-selector.php#L125) at line 125
