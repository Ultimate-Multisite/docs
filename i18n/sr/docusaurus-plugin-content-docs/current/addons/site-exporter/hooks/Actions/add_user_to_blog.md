---
id: add_user_to_blog
title: Радња - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog {#action-addusertoblog}

Покреће се одмах након што се корисник дода на сајт.

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $user_id | `int` | ID корисника. |
| $role | `string` | Улога корисника. |
| $blog_id | `int` | ID блога. |

### Од верзије {#since}

- MU: MU
### Извор {#source}

Дефинисано у [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) у реду 174
