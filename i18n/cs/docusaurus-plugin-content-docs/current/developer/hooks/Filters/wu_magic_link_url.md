---
id: wu_magic_link_url
title: Filter - wu_magic_link_url
sidebar_label: wu_magic_link_url
_i18n_hash: 60efe2aa6a8dff965d7ff0fb303a7bf4
---
# Filter: wu_magic_link_url

Filtruje vygenerovanou URL magic linku.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $magic_link | `string` | URL magic linku. |
| $user_id | `int` | ID uživatele. |
| $site_id | `int` | ID webové stránky. |
| $redirect_to | `string` | URL pro přesměrování. |

### Od verze {#since}

- 2.0.0
### Zdroj {#source}

Definováno v [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L148) na řádku 148
