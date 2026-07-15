---
id: wu_use_domain_mapping
title: Filtrační - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Určete, zda má být mapování použito

Obvykle chcete povolit použití pouze aktivních mapování. Pokud ale chcete použít pokročilejší logiku, nebo chcete, aby byly mapovány i neaktivní domény, stačí zde přidat filtr.

## Parametry {#parameters}

| Název | Typ | Popis |
|------|------|-------------|
| $is_active | `bool` | Má být mapování považováno za aktivní? |
| $mapping | `\Domain` | Mapování, které zkoumáme |
| $domain | `string` | |

### Zdroj {#source}

Definováno v [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) na řádku 391
