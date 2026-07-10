---
id: wu_country_get_administrative_division_name
title: Filter - wu_country_get_administrative_division_name
sidebar_label: wu_country_get_administrative_division_name
_i18n_hash: c0ef741f2ea438861e773d35fcb5900d
---
# Filter: wu_country_get_administrative_division_name {#filter-wucountrygetadministrativedivisionname}

Visszaadja az ország adminisztratív egységeinek szép nevének a változatát.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $name | `string` | Az egység neve. Általában valami, mint állam, megye, régió stb. |
| $country_code | `string` | Kétbetű ISO kód az ország számára. |
| $state_code | `string` | Kétbetű ISO kód az állam számára. |
| $ucwords | `bool` | Ha nagybetűre írjuk a szavakat. |
| $current_country | `\WP_Ultimo\Country\Country` | Az aktuális osztály példányát. |

### Desde {#since}

- 2.0.11
### Forrás {#source}

Definíciója található [`inc/country/class-country.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/country/class-country.php#L250) fájlban a 250-edik sorban.


## Visszaadja {#returns}
A módosított egységnevet.
