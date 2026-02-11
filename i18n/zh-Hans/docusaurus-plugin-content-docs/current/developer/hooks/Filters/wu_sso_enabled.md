---
id: wu_sso_enabled
title: 过滤器 - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# 过滤器: wu_sso_enabled

启用/禁用跨域单点登录功能。

过滤此值以完全关闭单点登录，或有条件地启用它。

## 参数

| 名称 | 类型 | 描述 |
|------|------|------|
| $enabled | `bool` | 是否启用 SSO？开启为 `true`，关闭为 `false-ish`。 |

### 自

- 2.0.11

### 来源

定义在 [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) 的第 110 行

## 返回值

如果 SSO 已启用或未启用。
