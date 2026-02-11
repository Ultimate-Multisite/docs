---
id: secure_auth_cookie
title: フィルタ - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# フィルタ: secure_auth_cookie

認証クッキーがHTTPS経由でのみ送信されるかどうかをフィルタします。

## パラメータ

| 名前 | タイプ | 説明 |
|------|------|------|
| $secure | `bool` | 認証クッキーがHTTPS経由でのみ送信されるかどうか |
| $user_id | `int` | ユーザーID |

### バージョン

- 3.1.0

### ソース

`inc/sso/auth-functions.php` の80行目で定義されています
