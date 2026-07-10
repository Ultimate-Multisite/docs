---
id: get_blogs_of_user
title: Filtar - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user {#filter-getblogsofuser}

Ovdje replicira izvorni WP Filter, za svaki slučaj.

Filtrira popis web-mjesta kojima korisnik pripada.

## Parametri {#parameters}

| Naziv | Tip | Opis |
|------|------|-------------|
| $sites | `object[]` | Niz objekata web-mjesta koji pripadaju korisniku. |
| $user_id | `int` | ID korisnika. |
| $all | `bool` | Treba li vraćeni niz web-mjesta sadržavati sva web-mjesta, uključujući ona označena kao 'deleted', 'archived' ili 'spam'. Zadano je false. |

### Od verzije {#since}

- 2.0.11
### Izvor {#source}

Definirano u [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) u retku 851
