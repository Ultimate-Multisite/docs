---
id: wu_magic_link_url
title: 过滤 - wu_magic_link_url
sidebar_label: wu_magic_link_url
_i18n_hash: 60efe2aa6a8dff965d7ff0fb303a7bf4
---
# 过滤: wu_magic_link_url

过滤生成的魔法链接 URL。

## 参数

| 名称 | 类型 | 描述 |
|------|------|-------------|
| $magic_link | `string` | 魔法链接 URL。 |
| $user_id | `int` | 用户 ID。 |
| $site_id | `int` | 站点 ID。 |
| $redirect_to | `string` | 重定向 URL。 |

### 版本

- 2.0.0

### 来源

在 [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L148) 第 148 行定义
