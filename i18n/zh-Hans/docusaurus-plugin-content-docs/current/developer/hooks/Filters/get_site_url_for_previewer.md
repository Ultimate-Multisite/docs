---
id: get_site_url_for_previewer
title: 过滤器 - get_site_url_for_previewer
sidebar_label: get_site_url_for_previewer
_i18n_hash: ab1a6ae3abce3498fa9cf4f5ee98d91d
---
# 过滤器: get_site_url_for_previewer

允许插件开发者过滤预览器中使用的 URL

## 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $domain | `string` | 当前正在使用的默认域名，适用于操作 |
| $domain_options | `array` | Ultimate Multisite 设置 -> 网络设置 -> 域名选项中输入的所有域名选项列表 |

### 自

- 1.7.2

### 来源

在 `inc/checkout/class-legacy-checkout.php` 的第 812 行定义


## 返回
将要使用的新域名
