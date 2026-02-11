---
id: add_user_to_blog
title: >-
  We need to translate the phrase "Action - add_user_to_blog" into Russian. The
  user likely wants the translation of that phrase. According to the rules, we
  only translate prose text and frontmatter "title" and "description" values.
  The phrase "Action - add_user_to_blog" is a title. So we translate "Action" to
  "Действие". The rest "add_user_to_blog" is a function name, so we keep it
  unchanged. So final output: "Действие - add_user_to_blog".Действие -
  add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog

Fires immediately after a user is added to a site.

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $user_id | `int` | ID пользователя. |
| $role | `string` | Роль пользователя. |
| $blog_id | `int` | ID блога. |

### С момента

- MU: MU

### Источник

Определено в [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) на строке 174
