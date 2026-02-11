---
id: wu_magic_link_enforce_user_agent
title: 过滤器 - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# 过滤: wu_magic_link_enforce_user_agent

过滤是否强制执行用户代理验证。

设置为 false 可让令牌在不同浏览器/设备之间工作。这降低了安全性，但提高了可用性。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $enforce | `bool` | 是否强制执行用户代理匹配。 |

### 自

- 2.0.0

### 来源

在 [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) 中定义，位于第 410 行。
