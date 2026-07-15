---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user

Replicira originalni WP Filter ovdje, radi sigurnosti.

Filtrira listu sajtova kojima je korisnik član.

## Parametri {#parameters}

| Name | Type | Opis |
|------|------|-------------|
| $sites | `object[]` | Niz objekata sajtova kojima pripada korisnik. |
| $user_id | `int` | ID korisnika. |
| $all | `bool` | Da li bi vraćeni niz sajtova trebao sadržavati sve sajtove, uključujući one označene kao 'obrisani', 'arhivirani' ili 'spam'. Podrazumevano je false. |

### Od {#since}

- 2.0.11
### Izvor {#source}

Definisano je u [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) na liniji 851
