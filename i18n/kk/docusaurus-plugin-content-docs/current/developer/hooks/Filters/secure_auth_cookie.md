---
id: secure_auth_cookie
title: Сүзгі - secure_auth_cookie
sidebar_label: secure_auth_cookie
_i18n_hash: a03742593fbe53382d76a30069111f82
---
# Filter: secure_auth_cookie {#filter-secureauthcookie}

auth cookie тек HTTPS арқылы жіберілуі керектігін сүзгілейді.

## Параметрлер {#parameters}

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $secure | `bool` | cookie тек HTTPS арқылы жіберілуі керек пе. |
| $user_id | `int` | Пайдаланушы ID-і. |

### Бастап {#since}

- 3.1.0
### Дереккөз {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L80) ішінде 80-жолда анықталған.
