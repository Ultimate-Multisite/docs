---
id: add_user_to_blog
title: Handling - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Action: add_user_to_blog

Utløses umiddelbart etter at en bruker er lagt til et nettsted.

## Parametere

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $user_id | `int` | Bruker-ID. |
| $role | `string` | Brukerrolle. |
| $blog_id | `int` | Blogg-ID. |

### Siden

- MU: MU
### Kilde

Definert i [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) på linje 174
