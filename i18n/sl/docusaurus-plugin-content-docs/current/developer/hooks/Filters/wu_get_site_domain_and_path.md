---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

Razvijalcem omogoča spreminjanje parov domena/pot.

To je lahko uporabno za več stvari, na primer za implementacijo neke vrste staging rešitve, različnih strežnikov itd.

## Parametri

| Ime | Vrsta | Opis |
|------|------|-------------|
| $d | `object` | Trenutni objekt, ki vsebuje ključa domain in path. |
| $path_or_subdomain | `string` | Izvirna pot/poddomena, posredovana funkciji. |

### Od različice

- 2.0.0
### Vir

Definirano v [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) v vrstici 235


## Vrne
Objekt, ki vsebuje ključa domain in path.
