---
id: set_logged_in_cookie
title: アクション - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

ログイン認証クッキーが設定される直前に発火します。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | ログインクッキーの値。 |
| $expire | `int` | ログインの猶予期間が終了する時刻（UNIXタイムスタンプ）。デフォルトはクッキーの有効期限から12時間後です。 |
| $expiration | `int` | ログイン認証クッキーが失効する時刻（UNIXタイムスタンプ）。デフォルトは現在から14日後です。 |
| $user_id | `int` | ユーザーID。 |
| $scheme | `string` | 認証スキーム。デフォルトは 'logged_in'。 |
| $token | `string` | このクッキーに使用するユーザーのセッショントークン。 |

### Since

- 2.6.0
- 4.9.0: <code>$token</code> パラメータが追加されました。

### Source

定義は [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) の 141 行目にあります。
