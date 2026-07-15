---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path

Maak dit moontlik vir ontwikkelaars om die domein/pad-paare te manipuleer.

Dit kan nuttig wees vir 'n aantal dinge, soos die implementering van 'n soort staging-oplossing, verskillende bedieners, ens.

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $d | `object` | Die huidige objek wat 'n domein en pad-sleutels bevat. |
| $path_or_subdomain | `string` | Die oorspronklike pad/subdomein wat aan die funksie oorgedra word. |

### Sedert {#since}

- 2.0.0
### Bron {#source}

Bepaald in [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) op lyn 235

## Gee Terug {#returns}
'n Objek wat 'n domein en pad-sleutels bevat.
