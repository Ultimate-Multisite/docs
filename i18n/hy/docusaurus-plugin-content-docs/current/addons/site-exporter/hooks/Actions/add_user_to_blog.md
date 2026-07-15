---
id: add_user_to_blog
title: Գործողություն - ավելացնել օգտատիրոջը բլոգում
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Գործողություն՝ add_user_to_blog

Գործարկվում է անմիջապես այն բանից հետո, երբ օգտատերը ավելացվում է կայքին։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $user_id | `int` | Օգտատիրոջ ID։ |
| $role | `string` | Օգտատիրոջ դերը։ |
| $blog_id | `int` | Բլոգի ID։ |

### Սկսած {#since}

- MU: MU
### Աղբյուր {#source}

Սահմանված է [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174)-ում՝ 174-րդ տողում։
