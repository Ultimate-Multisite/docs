---
id: add_user_to_blog
title: Acció - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Acció: add_user_to_blog

S'executa immediatament després que s'afegeixi un usuari a un site.

## Paràmetres

| Nom | Tipus | Descripció |
|------|------|-------------|
| $user_id | `int` | ID d'usuari. |
| $role | `string` | Rol de l'usuari. |
| $blog_id | `int` | ID del blog. |

### Des de

- MU: MU
### Font

Definit a [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) a la línia 174
