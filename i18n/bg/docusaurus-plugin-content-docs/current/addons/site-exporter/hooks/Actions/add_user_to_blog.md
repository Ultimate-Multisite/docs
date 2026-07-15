---
id: add_user_to_blog
title: Действие - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog

Изпълнява се веднага след като потребител е добавен към сайт.

## Параметри {#parameters}

| Име | Тип | Описание |
|------|------|-------------|
| $user_id | `int` | Идентификатор на потребителя. |
| $role | `string` | Роля на потребителя. |
| $blog_id | `int` | Идентификатор на блога. |

### От {#since}

- MU: MU
### Източник {#source}

Дефиниран в [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) на ред 174
