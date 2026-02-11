---
id: set_logged_in_cookie
title: Action - set_logged_in_cookie
sidebar_label: set_logged_in_cookie
_i18n_hash: f26ccae9b12cf56942b7e99a288ea87c
---
# Action: set_logged_in_cookie

S'exécute immédiatement avant que le cookie d'authentification connecté soit défini.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $logged_in_cookie | `string` | La valeur du cookie connecté. |
| $expire | `int` | Le temps d'expiration de la période de grâce de connexion sous forme de timestamp UNIX. La valeur par défaut est 12 heures après l'expiration du cookie. |
| $expiration | `int` | Le temps d'expiration du cookie d'authentification connecté sous forme de timestamp UNIX. La valeur par défaut est 14 jours à partir de maintenant. |
| $user_id | `int` | ID utilisateur. |
| $scheme | `string` | Schéma d'authentification. Valeur par défaut 'logged_in'. |
| $token | `string` | Le jeton de session de l'utilisateur à utiliser pour ce cookie. |

### Depuis

- 2.6.0
- 4.9.0: Le paramètre <code>$token</code> a été ajouté.

### Source

Défini dans [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L141) à la ligne 141
