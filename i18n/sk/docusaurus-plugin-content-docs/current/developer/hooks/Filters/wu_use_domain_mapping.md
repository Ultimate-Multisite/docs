---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Určuje, či sa má použiť mapovanie

Zvyčajne budete chcieť povoliť používanie iba aktívnych mapovaní. Ak však chcete použiť pokročilejšiu logiku alebo povoliť mapovanie aj neaktívnych domén, jednoducho to odfiltrujte tu.

## Parametre

| Názov | Typ | Popis |
|------|------|-------------|
| $is_active | `bool` | Má sa mapovanie považovať za aktívne? |
| $mapping | `\Domain` | Mapovanie, ktoré kontrolujeme |
| $domain | `string` |  |

### Zdroj

Definované v [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) na riadku 391
