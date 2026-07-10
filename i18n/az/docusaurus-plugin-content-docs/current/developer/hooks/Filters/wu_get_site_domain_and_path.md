---
id: wu_get_site_domain_and_path
title: Filter - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

Developerların domen/yol cütlüklərini manipulyasiya etməsinə imkan verir.

Bu, bir neçə məqsədlə faydalı ola bilər, məsələn, növ bir "staging" (hazırlıq) həlli, fərqli serverlər və s. tətbiq etmək kimi.

## Parametrlər {#parameters}

| Ad | Növ | Təsvir |
|------|------|-------------|
| $d | `object` | Domen və yol açarları (keys) ehtiva edən cari obyekt. |
| $path_or_subdomain | `string` | Funksiyaya ötürülən orijinal yol/altdomen. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) at line 235


## Returns {#returns}
Domen və yol açarları ehtiva edən bir obyekt.
