---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

Võimaldab arendajatel domeeni/tee paare muuta.

See võib olla kasulik mitmel eesmärgil, näiteks mingisuguse staging-lahenduse, erinevate serverite jne rakendamiseks.

## Parameetrid

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $d | `object` | Praegune objekt, mis sisaldab domeeni ja tee võtmeid. |
| $path_or_subdomain | `string` | Algne tee/alamdomeen, mis edastati funktsioonile. |

### Alates

- 2.0.0
### Allikas

Määratletud failis [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) real 235


## Tagastab
Objekti, mis sisaldab domeeni ja tee võtmeid.
