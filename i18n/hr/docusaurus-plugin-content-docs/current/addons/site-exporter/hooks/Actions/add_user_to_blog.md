---
id: add_user_to_blog
title: Radnja - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Radnja: add_user_to_blog

Pokreće se odmah nakon što je korisnik dodan na web-mjesto.

## Parametri

| Naziv | Tip | Opis |
|------|------|-------------|
| $user_id | `int` | ID korisnika. |
| $role | `string` | Uloga korisnika. |
| $blog_id | `int` | ID bloga. |

### Od verzije

- MU: MU
### Izvor

Definirano u [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) na retku 174
