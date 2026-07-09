---
id: auth_cookie_expiration
title: Шүүлтүүр - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Шүүлтүүр: auth_cookie_expiration

Баталгаажуулалтын cookie-ийн дуусах хугацааны үргэлжлэх хугацааг шүүнэ.

## Параметрүүд

| Нэр | Төрөл | Тайлбар |
|------|------|-------------|
| $length | `int` | Дуусах хугацааны үргэлжлэх хугацаа секундээр. |
| $user_id | `int` | Хэрэглэгчийн ID. |
| $remember | `bool` | Хэрэглэгчийн нэвтрэлтийг санах эсэх. Анхдагч нь false. |

### Хойш

- 2.8.0
### Эх сурвалж

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) файлын 52-р мөрөнд тодорхойлсон.
