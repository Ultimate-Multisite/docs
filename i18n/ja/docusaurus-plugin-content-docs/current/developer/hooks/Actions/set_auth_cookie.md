---
id: set_auth_cookie
title: アクション - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# アクション: set_auth_cookie

認証クッキーが設定される直前に発火します。

## パラメータ

| 名前 | 型 | 説明 |
|------|------|-------------|
| $auth_cookie | `string` | 認証クッキーの値。 |
| $expire | `int` | ログインの猶予期間が終了する時刻（UNIXタイムスタンプ）。デフォルトはクッキーの有効期限から12時間後です。 |
| $expiration | `int` | 認証クッキーが失効する時刻（UNIXタイムスタンプ）。デフォルトは現在から14日後です。 |
| $user_id | `int` | ユーザーID。 |
| $scheme | `string` | 認証スキーム。'auth'または'secure_auth'が使用できます。 |
| $token | `string` | このクッキーに使用するユーザーのセッショントークン。 |

### 導入

- 2.5.0
- 4.9.0: The <code>$token</code> パラメータが追加されました。

### ソース

以下で定義されています [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) 行 124
