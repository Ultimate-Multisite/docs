---
id: add_user_to_blog
title: Toiminto - add_user_to_blog
sidebar_label: add_user_to_blog
_i18n_hash: ac7b281fe49bfc7d858869b1a24e9ae3
---
# Toiminto: add_user_to_blog {#action-addusertoblog}

Käynnistyy välittömästi sen jälkeen, kun käyttäjä on lisätty sivustolle.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $user_id | `int` | Käyttäjän ID. |
| $role | `string` | Käyttäjän rooli. |
| $blog_id | `int` | Sivuston ID. |

### Alkaen {#since}

- MU: MU
### Lähde {#source}

Määritelty tiedostossa [`inc/mu-migration/includes/helpers.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-site-exporter/blob/main/inc/mu-migration/includes/helpers.php#L174) rivillä 174
