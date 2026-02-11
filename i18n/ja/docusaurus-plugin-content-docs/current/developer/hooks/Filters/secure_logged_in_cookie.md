---
id: secure_logged_in_cookie
title: フィルタ - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# フィルタ: secure_logged_in_cookie

ログイン済みのクッキーが HTTPS のみで送信されるべきかどうかをフィルタします。

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | ログイン済みのクッキーが HTTPS のみで送信されるべきかどうか。 |
| $user_id | `int` | ユーザー ID。 |
| $secure | `bool` | 認証クッキーが HTTPS のみで送信されるべきかどうか。 |

### Since

- 3.1.0

### Source

Defined in [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) at line 91
