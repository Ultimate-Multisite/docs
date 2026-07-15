---
id: wu_use_domain_mapping
title: Pansala - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Tukuyin kung dapat bang gamitin ang isang mapping

Karaniwan, gugustuhin mong payagan lamang na gamitin ang mga aktibong mapping. Gayunpaman, kung gusto mong gumamit ng mas advanced na lohika, o payagan ding ma-map ang mga hindi aktibong domain, mag-filter lang dito.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $is_active | `bool` | Dapat bang ituring na aktibo ang mapping? |
| $mapping | `\Domain` | Mapping na sinusuri natin |
| $domain | `string` |  |

### Pinagmulan {#source}

Tinukoy sa [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) sa linya 391
