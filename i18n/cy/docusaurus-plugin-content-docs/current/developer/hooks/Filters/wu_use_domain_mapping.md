---
id: wu_use_domain_mapping
title: Hidlydd - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Hidlydd: wu_use_domain_mapping {#filter-wuusedomainmapping}

Penderfynu a ddylid defnyddio mapiad

Fel arfer, byddwch am ganiatáu i fapiadau gweithredol yn unig gael eu defnyddio. Fodd bynnag, os ydych am ddefnyddio rhesymeg fwy datblygedig, neu ganiatáu i barthau nad ydynt yn weithredol gael eu mapio hefyd, hidlwch yma yn syml.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $is_active | `bool` | A ddylid trin y mapiad fel un gweithredol? |
| $mapping | `\Domain` | Mapiad rydym yn ei archwilio |
| $domain | `string` |  |

### Ffynhonnell {#source}

Diffinnir yn [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) ar linell 391
