---
id: wu_use_domain_mapping
title: Szűrő - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Meg kell határozni, hogy egy mappinget kell-e használni.

Általában csak az aktív mappingek használatát szeretnéd engedélyezni. Ha azonban fejlettebb logikát szeretnél használni, vagy ha nem aktív domaineknek is szeretnéd engedélyezni a mappinget, egyszerűen csak itt kell ezt a filtert használni.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $is_active | `bool` | Azonosítás szerint az aktívnek kell-e tekinteni a mappingnek? |
| $mapping | `\Domain` | Az a mapping, amit ellenőrzünk |
| $domain | `string` | |

### Forrás {#source}

Definíciója található a [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) fájlban, 391-edik soron.
