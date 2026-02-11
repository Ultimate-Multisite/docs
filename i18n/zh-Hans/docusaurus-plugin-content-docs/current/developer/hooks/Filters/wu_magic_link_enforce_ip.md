---
id: wu_magic_link_enforce_ip
title: 过滤 - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

过滤器：是否强制执行 IP 地址验证。

将其设置为 false 以允许令牌在不同网络中工作。  
这会降低安全性，但提高可用性（例如，移动用户切换网络时）。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | 是否强制执行 IP 地址匹配。 |

### Since

- 2.0.0

### Source

定义在 [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) 第 422 行
