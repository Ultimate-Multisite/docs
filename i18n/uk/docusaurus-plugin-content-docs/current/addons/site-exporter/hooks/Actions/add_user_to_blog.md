---
id: add_user_to_blog
title: Дія - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog

Активується одразу після додавання користувача до сайту.

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $user_id | `int` | ID користувача. |
| $role | `string` | Роль користувача. |
| $blog_id | `int` | ID блогу. |

### Since

- MU: MU
### Source

Defined in [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) at line 174
