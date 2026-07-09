---
id: secure_logged_in_cookie
title: Шүүлтүүр - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie {#filter-secureloggedincookie}

Нэвтэрсэн cookie-г зөвхөн HTTPS-ээр илгээх эсэхийг шүүнэ.

## Параметрүүд {#parameters}

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Нэвтэрсэн cookie-г зөвхөн HTTPS-ээр илгээх эсэх. |
| $user_id | `int` | Хэрэглэгчийн ID. |
| $secure | `bool` | Auth cookie-г зөвхөн HTTPS-ээр илгээх эсэх. |

### Хувилбараас хойш {#since}

- 3.1.0
### Эх сурвалж {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91)-д 91-р мөрөнд тодорхойлсон
