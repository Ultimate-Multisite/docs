---
id: wu_get_site_domain_and_path
title: Filtër - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

Lejon zhvilluesit të manipulojnë çiftet domain/path.

Kjo mund të jetë e dobishme për një sërë gjërash, si zbatimi i një lloj zgjidhjeje staging, serverë të ndryshëm, etj.

## Parametrat {#parameters}

| Emri | Tipi | Përshkrimi |
|------|------|-------------|
| $d | `object` | Objekti aktual që përmban çelësat domain dhe path. |
| $path_or_subdomain | `string` | Path/subdomain origjinal i kaluar te funksioni. |

### Që nga {#since}

- 2.0.0
### Burimi {#source}

Përcaktuar në [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) në rreshtin 235


## Kthen {#returns}
Një objekt që përmban çelësat domain dhe path.
