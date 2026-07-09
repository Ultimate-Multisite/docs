---
id: add_user_to_blog
title: Darbība - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog

Tiek izpildīta uzreiz pēc tam, kad lietotājs ir pievienots vietnei.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $user_id | `int` | Lietotāja ID. |
| $role | `string` | Lietotāja loma. |
| $blog_id | `int` | Bloga ID. |

### Kopš

- MU: MU
### Avots

Definēts [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) 174. rindā
