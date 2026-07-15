---
id: set_auth_cookie
title: Аракет - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Аракет: set_auth_cookie

Аутентификация cookie коюлардын дароо алдында иштейт.

## Параметрлер {#parameters}

| Аты | Түрү | Сыпаттамасы |
|------|------|-------------|
| $auth_cookie | `string` | Аутентификация cookie мааниси. |
| $expire | `int` | Кирүү үчүн жеңилдик мөөнөтү бүтө турган убакыт, UNIX убакыт белгиси катары. Демейкиси cookie мөөнөтү бүткөн убакыттан 12 саат кийин. |
| $expiration | `int` | Аутентификация cookie мөөнөтү бүтө турган убакыт, UNIX убакыт белгиси катары. Демейкиси азыркы учурдан 14 күн кийин. |
| $user_id | `int` | Колдонуучу ID. |
| $scheme | `string` | Аутентификация схемасы. Маанилерине 'auth' же 'secure_auth' кирет. |
| $token | `string` | Бул cookie үчүн колдонулуучу колдонуучунун сеанс токени. |

### Версиядан бери {#since}

- 2.5.0
- 4.9.0: The <code>$token</code> parameter was added.
### Булак {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) ичинде 124-сапта аныкталган.
