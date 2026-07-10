---
id: add_user_to_blog
title: Veprim - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Veprim: add_user_to_blog {#action-addusertoblog}

Ekzekutohet menjëherë pasi një përdorues shtohet në një sajt.

## Parametrat {#parameters}

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $user_id | `int` | ID-ja e përdoruesit. |
| $role | `string` | Roli i përdoruesit. |
| $blog_id | `int` | ID-ja e blogut. |

### Që nga {#since}

- MU: MU
### Burimi {#source}

Përcaktuar në [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) në rreshtin 174
