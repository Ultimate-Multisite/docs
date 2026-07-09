---
id: add_user_to_blog
title: Acțiune - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Acțiune: add_user_to_blog {#action-addusertoblog}

Se declanșează imediat după ce un utilizator este adăugat la un site.

## Parametri {#parameters}

| Nume | Tip | Descriere |
|------|------|-------------|
| $user_id | `int` | ID-ul utilizatorului. |
| $role | `string` | Rolul utilizatorului. |
| $blog_id | `int` | ID-ul blogului. |

### De la {#since}

- MU: MU
### Sursă {#source}

Definit în [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) la linia 174
