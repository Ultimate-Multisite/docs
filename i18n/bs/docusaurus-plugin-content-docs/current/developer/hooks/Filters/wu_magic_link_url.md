---
id: wu_magic_link_url
title: Filter - wu_magic_link_url
sidebar_label: wu_magic_link_url
_i18n_hash: 60efe2aa6a8dff965d7ff0fb303a7bf4
---
# Filter: wu_magic_link_url

Filtrira URL magičnog linka koji je generisan.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $magic_link | `string` | URL magičnog linka. |
| $user_id | `int` | ID korisnika. |
| $site_id | `int` | ID sajta. |
| $redirect_to | `string` | URL na koji treba preusmeriti. |

### Od verzije

- 2.0.0
### Izvor

Definisano u [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L148) na liniji 148
