---
id: wu_magic_link_enforce_ip
title: Suodatin - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Suodattaa, valvotaanko IP-osoitteen vahvistusta.

Aseta arvoon false, jotta tokenit voivat toimia eri verkoista. Tämä heikentää tietoturvaa mutta parantaa käytettävyyttä (esim. mobiilikäyttäjille, jotka vaihtavat verkkoa).

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $enforce | `bool` | Valvotaanko IP-osoitteen vastaavuutta. |

### Alkaen {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) rivillä 422
