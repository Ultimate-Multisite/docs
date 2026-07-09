---
id: set_auth_cookie
title: Әрекет - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

Аутентификация cookie орнатылардың дәл алдында іске қосылады.

## Параметрлер

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Аутентификация cookie мәні. |
| $expire | `int` | Кірудің жеңілдік кезеңі аяқталатын уақыт UNIX уақыт белгісі ретінде. Әдепкі мәні — cookie мерзімі аяқталғаннан кейін 12 сағат. |
| $expiration | `int` | Аутентификация cookie мерзімі аяқталатын уақыт UNIX уақыт белгісі ретінде. Әдепкі мәні — қазірден бастап 14 күн. |
| $user_id | `int` | Пайдаланушы ID. |
| $scheme | `string` | Аутентификация схемасы. Мәндерге 'auth' немесе 'secure_auth' кіреді. |
| $token | `string` | Осы cookie үшін пайдаланылатын пайдаланушының сеанс token. |

### Шыққан нұсқасы

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Дереккөзі

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) ішінде 124-жолда анықталған
