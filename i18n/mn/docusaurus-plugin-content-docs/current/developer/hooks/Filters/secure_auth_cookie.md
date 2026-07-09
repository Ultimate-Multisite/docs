---
id: secure_auth_cookie
title: Шүүлтүүр - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie

Нэвтрэлтийн cookie-г зөвхөн HTTPS-ээр илгээх эсэхийг шүүнэ.

## Параметрүүд

| Name | Type | Description |
|------|------|-------------|
| $secure | `bool` | Cookie-г зөвхөн HTTPS-ээр илгээх эсэх. |
| $user_id | `int` | Хэрэглэгчийн ID. |

### Хувилбараас эхлэн

- 3.1.0
### Эх сурвалж

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80)-д 80-р мөрөнд тодорхойлсон.
