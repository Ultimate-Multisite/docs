---
id: secure_logged_in_cookie
title: Сүзгі - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filter: secure_logged_in_cookie

Жүйеге кірген cookie тек HTTPS арқылы жіберілуі керек пе екенін сүзеді.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Жүйеге кірген cookie тек HTTPS арқылы жіберілуі керек пе. |
| $user_id | `int` | Пайдаланушы ID-і. |
| $secure | `bool` | Түпнұсқалықты растау cookie-і тек HTTPS арқылы жіберілуі керек пе. |

### Бастап {#since}

- 3.1.0
### Дереккөзі {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) ішінде 91-жолда анықталған
