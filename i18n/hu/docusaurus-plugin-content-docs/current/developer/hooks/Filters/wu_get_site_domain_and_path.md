---
id: wu_get_site_domain_and_path
title: Szűrő - wu_get_site_domain_and_path
sidebar_label: wu_get_site_domain_and_path
_i18n_hash: 86384a14182db584d1b69aec8790ed07
---
# Filter: wu_get_site_domain_and_path {#filter-wugetsitedomainandpath}

Lehetővé teszi a fejlesztőknek a domain/path párok manipulálását.

Ez számos dolghoz használható, például egy staging (előzetes) megoldás, vagy különböző szerverek beépítéséhez, stb.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $d | `object` | A jelenlegi objektum, amely domain és path kulcsokat tartalmaz. |
| $path_or_subdomain | `string` | Az eredeti path/aldomain, amelyet átadtak a függvénynek. |

### Since {#since}

- 2.0.0
### Source {#source}

Definíciója található [`inc/functions/site.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/site.php#L235) fájlban, 235-sorban.


## Visszaadja {#returns}
Egy objektum, amely domain és path kulcsokat tartalmaz.
