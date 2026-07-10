---
id: get_blogs_of_user
title: Suodatin - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Suodatin: get_blogs_of_user {#filter-getblogsofuser}

Toistaa alkuperäisen WP-suodattimen tässä varmuuden vuoksi.

Suodattaa luettelon sivustoista, joihin käyttäjä kuuluu.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $sites | `object[]` | Taulukko käyttäjälle kuuluvista sivusto-olioista. |
| $user_id | `int` | Käyttäjän ID. |
| $all | `bool` | Pitäisikö palautetun sivustotaulukon sisältää kaikki sivustot, mukaan lukien ne, jotka on merkitty arvoilla 'deleted', 'archived' tai 'spam'. Oletus false. |

### Alkaen {#since}

- 2.0.11
### Lähde {#source}

Määritelty tiedostossa [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) rivillä 851
