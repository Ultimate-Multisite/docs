---
id: auth_cookie_expiration
title: Filtre - auth_cookie_expiration
sidebar_label: auth_cookie_expiration
_i18n_hash: abdb61f075bb0c28e31605ab622e26f5
---
# Filtre : auth_cookie_expiration

Filtre la durée de la période d'expiration du cookie d'authentification.

## Paramètres

| Name | Type | Description |
|------|------|-------------|
| $length | `int` | Durée de la période d'expiration en secondes. |
| $user_id | `int` | ID utilisateur. |
| $remember | `bool` | Permet de mémoriser la connexion de l'utilisateur. Valeur par défaut : false. |

### Depuis

- 2.8.0

### Source

Défini dans [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L52) à la ligne 52
