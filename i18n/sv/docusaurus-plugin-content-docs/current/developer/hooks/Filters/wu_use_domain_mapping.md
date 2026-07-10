---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping {#filter-wuusedomainmapping}

Bestäm om en mappning ska användas

Normalt vill du bara tillåta aktiva mappningar. Om du däremot vill använda mer avancerisk logik, eller tillåta att icke-aktiva domäner mappas, kan du enkelt filtrera här.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $is_active | `bool` | Ska mappningen behandlas som aktiv? |
| $mapping | `\Domain` | Mappningen vi inspekterar |
| $domain | `string` | |

### Källa {#source}

Definieras i [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) på rad 391
