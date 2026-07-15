---
id: add_user_to_blog
title: Дејство - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog

Се активира веднаш откако корисник ќе биде додаден на сајт.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $user_id | `int` | ID на корисник. |
| $role | `string` | Улога на корисник. |
| $blog_id | `int` | ID на блог. |

### Од {#since}

- MU: MU
### Извор {#source}

Дефинирано во [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) на линија 174
