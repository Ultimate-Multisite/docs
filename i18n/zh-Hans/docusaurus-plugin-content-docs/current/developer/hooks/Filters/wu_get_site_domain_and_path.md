---
id: wu_get_site_domain_and_path
title: 过滤器 - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# 过滤器: wu_get_site_domain_and_path

允许开发者操作域名/路径对。

这在多种场景中都很有用，例如实现某种预发布方案、不同服务器等。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $d | `object` | 当前对象包含域名和路径键。 |
| $path_or_subdomain | `string` | 传递给函数的原始路径/子域名。 |

### 自

- 2.0.0

### 来源

定义于 [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) 第 235 行

## 返回值

一个包含域名和路径键的对象。
