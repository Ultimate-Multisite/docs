---
id: wu_magic_link_enforce_ip
title: 過濾器 - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

用來決定是否強制執行 IP 位址驗證。

如果設定為 `false`，則允許 token 在不同網路環境下使用。這會降低安全性，但能提高可用性（例如，對於在不同網路間切換的行動裝置使用者）。

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | 是否強制執行 IP 位址匹配。 |

### Since {#since}

- 2.0.0
### Source {#source}

定義於 [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) 的第 422 行
