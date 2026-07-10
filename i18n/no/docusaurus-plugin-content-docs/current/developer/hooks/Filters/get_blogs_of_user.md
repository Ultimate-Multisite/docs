---
id: get_blogs_of_user
title: Filter - get_blogs_of_user
sidebar_label: get_blogs_of_user
_i18n_hash: 77871d3651eb7f3ab1d055fdb89c061e
---
# Filter: get_blogs_of_user {#filter-getblogsofuser}

Gjenskaper den originale WP Filteren her, for å være på den sikre siden.

Filtrerer listen over nettsteder en bruker tilhører.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $sites | `object[]` | En array med nettstedobjekter som tilhører brukeren. |
| $user_id | `int` | Bruker-ID. |
| $all | `bool` | Om den returnerte nettsted-arrayen skal inneholde alle nettsteder, inkludert de som er merket som 'slettet', 'arkivert' eller 'spam'. Standard er `false`. |

### Siden {#since}

- 2.0.11
### Kilde {#source}

Definert i [`inc/managers/class-site-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-site-manager.php#L851) på linje 851
