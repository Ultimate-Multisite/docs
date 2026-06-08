---
id: add_user_to_blog
title: Akcija - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog

Pokreće se odmah nakon što se korisnik doda na sajt.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $user_id | `int` | ID korisnika. |
| $role | `string` | Uloga korisnika. |
| $blog_id | `int` | ID bloga. |

### Od

- MU: MU
### Izvor

Definisano u [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) na liniji 174
