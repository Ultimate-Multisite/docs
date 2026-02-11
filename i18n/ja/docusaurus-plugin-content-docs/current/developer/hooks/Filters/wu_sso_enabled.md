---
id: wu_sso_enabled
title: フィルタ - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

クロスドメイン単一サインオン機能を有効/無効にします。

この値をフィルタリングして、単一サインオンを完全にオフにするか、条件付きで有効にします。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | SSO を有効にするかどうか。オンの場合は `true`、オフの場合は `false-ish`。 |

### Since

- 2.0.11

### Source

定義は [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) の行 110 にあります。

## Returns

SSO が有効かどうかを返します。
