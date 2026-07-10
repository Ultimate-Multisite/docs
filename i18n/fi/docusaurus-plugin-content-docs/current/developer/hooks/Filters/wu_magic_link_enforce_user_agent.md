---
id: wu_magic_link_enforce_user_agent
title: Suodatin - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Suodatin: wu_magic_link_enforce_user_agent {#filter-wumagiclinkenforceuseragent}

Suodata, pakotetaanko user agent -vahvistus käyttöön.

Aseta arvoksi false, jotta tokenit toimivat eri selaimissa/laitteissa. Tämä heikentää turvallisuutta mutta parantaa käytettävyyttä.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $enforce | `bool` | Pakotetaanko user agent -vastaavuus käyttöön. |

### Alkaen versiosta {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) rivillä 410
