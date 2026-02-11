---
id: wu_apc_process_page_content
title: 抱歉，我没有收到要翻译的具体内容。请提供该 Markdown/MDX 文件中的文本，我将为您完成翻译。
sidebar_label: wu_apc_process_page_content
_i18n_hash: 85631895afd7298462a111b4db356566
---
# 过滤器: wu_apc_process_page_content

允许开发者修改最终内容

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $content | `string` | 替换后的内容。 |
| $content_before_processing | `string` | 预替换前的内容。 |
| $to_replace | `array` | 包含占位符的数组。 |
| $placeholder_count | `int` | 找到的占位符数量。 |

### 版本

- 1.4.0

### 源码

在 [`inc/wu-apc-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-admin-page-creator/blob/main/inc/wu-apc-functions.php#L46) 的第 46 行定义

## 返回值

修改后的内容。
