---
id: set_logged_in_cookie
title: Әрекет - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Әрекет: set_logged_in_cookie

Жүйеге кірген аутентификация cookie орнатылмас бұрын бірден іске қосылады.

## Параметрлер

| Атауы | Түрі | Сипаттамасы |
|------|------|-------------|
| $logged_in_cookie | `string` | Жүйеге кірген cookie мәні. |
| $expire | `int` | Кіруге арналған жеңілдікті кезеңнің аяқталу уақыты, UNIX уақыт белгісі ретінде. Әдепкі мәні — cookie жарамдылық мерзімі аяқталғаннан кейін 12 сағат. |
| $expiration | `int` | Жүйеге кірген аутентификация cookie мерзімі аяқталатын уақыт, UNIX уақыт белгісі ретінде. Әдепкі мәні — қазіргі уақыттан бастап 14 күн. |
| $user_id | `int` | Пайдаланушы ID. |
| $scheme | `string` | Аутентификация схемасы. Әдепкі мәні 'logged_in'. |
| $token | `string` | Осы cookie үшін пайдаланылатын пайдаланушының сессия token. |

### Бастап

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Дереккөзі

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) ішінде 141-жолда анықталған
