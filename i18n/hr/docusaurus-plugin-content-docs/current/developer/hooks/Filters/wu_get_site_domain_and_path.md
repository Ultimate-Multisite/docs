---
id: wu_get_site_domain_and_path
title: Filtar - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

Omogućuje programerima manipulaciju parovima domene/putanje.

To može biti korisno za niz stvari, poput implementacije neke vrste staging rješenja, različitih poslužitelja itd.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $d | `object` | Trenutačni objekt koji sadrži ključeve domene i putanje. |
| $path_or_subdomain | `string` | Izvorna putanja/poddomena proslijeđena funkciji. |

### Od verzije {#since}

- 2.0.0
### Izvor {#source}

Definirano u [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) u retku 235


## Vraća {#returns}
Objekt koji sadrži ključeve domene i putanje.
