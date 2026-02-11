---
id: wu_make_primary_domain_redirect_url
title: 过滤器 - wu_make_primary_domain_redirect_url
sidebar_label: wu_make_primary_domain_redirect_url
_i18n_hash: bda96824db400b25e97802e5567df22d
---
# 过滤器：wu_make_primary_domain_redirect_url

在将域名设为主域后过滤重定向 URL。

允许开发者自定义用户在成功将域名设为主域后被重定向到的位置。默认情况下，重定向到主站点的当前 URL，或被修改站点的管理 URL。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $redirect_url | `string` | 默认的重定向 URL。要么是当前 URL（如果是主站点），要么是当前站点的管理 URL。 |
| $current_site | `int` | 被设为主域的站点 ID。 |
| $domain | `\Domain` | 已设为主域的域对象。 |
| $old_primary_domains | `array` | 之前主域的 ID 数组。 |

### 版本自此开始

- 2.0.0

### 源码

在 `inc/ui/class-domain-mapping-element.php` 的第 639 行定义

## 返回值

过滤后的重定向 URL。
