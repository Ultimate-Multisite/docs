---
id: set_logged_in_cookie
title: Аракет - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie {#action-setloggedincookie}

Кирген аныктыгын текшерүү cookie орнотулардан дароо мурун иштейт.

## Параметрлер {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | Кирген cookie мааниси. |
| $expire | `int` | Кирүү үчүн жеңилдетилген мөөнөт аяктаган убакыт UNIX timestamp катары. Демейкиси — cookie мөөнөтү аяктаган убакыттан 12 саат кийин. |
| $expiration | `int` | Кирген аныктыгын текшерүү cookie мөөнөтү аяктаган убакыт UNIX timestamp катары. Демейкиси — азыркы убакыттан 14 күндөн кийин. |
| $user_id | `int` | Колдонуучу ID. |
| $scheme | `string` | Аныктыгын текшерүү схемасы. Демейкиси 'logged_in'. |
| $token | `string` | Бул cookie үчүн колдонулуучу колдонуучунун сеанс токени. |

### Чыгарылгандан бери {#since}

- 2.6.0
- 4.9.0: The <code>$token</code> parameter was added.
### Булак {#source}

[`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) ичинде 141-сапта аныкталган
