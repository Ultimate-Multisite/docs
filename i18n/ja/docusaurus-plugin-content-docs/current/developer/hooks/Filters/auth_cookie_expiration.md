---
id: auth_cookie_expiration
title: フィルタ - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# フィルタ: auth_cookie_expiration

認証クッキーの有効期限期間をフィルタリングします。

## パラメータ

| 名前 | 型 | 説明 |
|------|------|-------------|
| $length | `int` | 有効期限期間を秒単位で指定します。 |
| $user_id | `int` | ユーザーID。 |
| $remember | `bool` | ユーザーのログインを記憶するかどうか。デフォルトはfalse。 |

### 以降

- 2.8.0

### ソース

定義は [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) の52行目にあります
