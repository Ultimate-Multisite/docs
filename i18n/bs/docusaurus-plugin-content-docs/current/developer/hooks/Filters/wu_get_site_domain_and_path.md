---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

Omogućava programerima da mijenjaju parove domena i putanja.

Ovo može biti korisno za više stvari, kao što je implementacija nekog rješenja za staging, različiti serveri, itd.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $d | `object` | Trenutni objekat koji sadrži ključeve domene i putanja. |
| $path_or_subdomain | `string` | Originalna putanja/poddomena proslijeđena funkciji. |

### Since {#since}

- 2.0.0
### Source {#source}

Definisano u [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) na liniji 235


## Returns {#returns}
Objekat koji sadrži ključeve domene i putanja.
