---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Tukaj za vsak primer posnema izvirni WP Filter.

Filtrira seznam spletnih mest, ki jim uporabnik pripada.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $sites | `object[]` | Polje objektov spletnih mest, ki pripadajo uporabniku. |
| $user_id | `int` | ID uporabnika. |
| $all | `bool` | Ali naj vrnjeno polje spletnih mest vsebuje vsa spletna mesta, vključno s tistimi, označenimi kot 'deleted', 'archived' ali 'spam'. Privzeto false. |

### Od različice {#since}

- 2.0.11
### Vir {#source}

Določeno v [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) v vrstici 851
