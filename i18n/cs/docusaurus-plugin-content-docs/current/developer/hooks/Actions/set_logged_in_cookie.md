---
id: set_logged_in_cookie
title: Akce - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie {#action-setloggedincookie}

Spustí se těsně před nastavením cookie pro ověření přihlášení.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $logged_in_cookie | `string` | Hodnota cookie pro přihlášeného uživatele. |
| $expire | `int` | Čas, kdy vyprší lhůta přihlášení, v formátu UNIX časového razítka. Výchozí hodnota je 12 hodin po vypršení cookie. |
| $expiration | `int` | Čas, kdy cookie pro ověření přihlášení vyprší, v formátu UNIX časového razítka. Výchozí hodnota je za 14 dní. |
| $user_id | `int` | ID uživatele. |
| $scheme | `string` | Schéma ověření. Výchozí je 'logged_in'. |
| $token | `string` | Token aktuálního uživatele, který se použije pro toto cookie. |

### Od verze {#since}

- 2.6.0
- 4.9.0: Byl přidán parametr <code>$token</code>.
### Zdroj {#source}

Definováno v [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) na řádku 141
