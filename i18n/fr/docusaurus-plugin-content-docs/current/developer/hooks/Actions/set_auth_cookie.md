---
id: set_auth_cookie
title: Action - set_auth_cookie
sidebar_label: set_auth_cookie
_i18n_hash: 30ea64dc01d9f9805c09717f5113e4fd
---
# Action: set_auth_cookie

S'exécute immédiatement avant que le cookie d'authentification ne soit défini.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $auth_cookie | `string` | Valeur du cookie d'authentification. |
| $expire | `int` | Le moment où la période de grâce de connexion expire sous forme de timestamp UNIX. La valeur par défaut est 12 heures après l'expiration du cookie. |
| $expiration | `int` | Le moment où le cookie d'authentification expire sous forme de timestamp UNIX. La valeur par défaut est 14 jours à partir de maintenant. |
| $user_id | `int` | Identifiant utilisateur. |
| $scheme | `string` | Schéma d'authentification. Les valeurs possibles sont 'auth' ou 'secure_auth'. |
| $token | `string` | Jeton de session de l'utilisateur à utiliser pour ce cookie. |

### Depuis

- 2.5.0
- 4.9.0: Le paramètre <code>$token</code> a été ajouté.

### Source

Défini dans [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L124) à la ligne 124
