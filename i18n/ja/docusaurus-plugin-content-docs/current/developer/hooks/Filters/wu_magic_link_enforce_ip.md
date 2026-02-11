---
id: wu_magic_link_enforce_ip
title: フィルタ - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

IPアドレス検証を強制するかどうかをフィルタします。

falseに設定すると、異なるネットワークからトークンを使用できるようになります。これによりセキュリティは低下しますが、使いやすさが向上します（例：ネットワークを切り替えるモバイルユーザー）。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | IPアドレスの一致を強制するかどうか。 |

### Since

- 2.0.0
### Source

Defined in [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) at line 422
