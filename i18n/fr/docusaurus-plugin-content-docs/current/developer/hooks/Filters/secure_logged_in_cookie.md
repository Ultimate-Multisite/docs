---
id: secure_logged_in_cookie
title: Filtre - secure_logged_in_cookie
sidebar_label: secure_logged_in_cookie
_i18n_hash: 4dbde39f6b78088a1397f654cf66c92c
---
# Filtre: secure_logged_in_cookie

Filtre pour déterminer si le cookie de connexion doit être envoyé uniquement via HTTPS.

## Paramètres

| Nom | Type | Description |
|------|------|-------------|
| $secure_logged_in_cookie | `bool` | Si le cookie de connexion doit être envoyé uniquement via HTTPS. |
| $user_id | `int` | Identifiant utilisateur. |
| $secure | `bool` | Si le cookie d'authentification doit être envoyé uniquement via HTTPS. |

### Depuis

- 3.1.0

### Source

Défini dans [`inc/sso/auth-functions.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/auth-functions.php#L91) à la ligne 91
