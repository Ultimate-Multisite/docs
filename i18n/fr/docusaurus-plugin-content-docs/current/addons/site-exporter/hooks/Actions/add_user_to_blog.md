---
id: add_user_to_blog
title: Action - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog {#action-addusertoblog}

Se déclenche immédiatement après qu'un utilisateur soit ajouté à un site.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $user_id | `int` | ID utilisateur. |
| $role | `string` | Rôle utilisateur. |
| $blog_id | `int` | ID du blog. |

### Since {#since}

- MU: MU

### Source {#source}

Défini dans [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) à la ligne 174
