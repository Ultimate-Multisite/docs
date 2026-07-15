---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Tinitukoy nito kung dapat bang gamitin ang isang mapping.

Kadalasan, gusto mong payagan lang ang mga *mapping* na aktibo. Ngunit, kung gusto mong gumamit ng mas advanced na lohika, o payagan din ang mga *domain* na hindi aktibo na ma-map, maaari ka lang mag-filter dito.

## Mga Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | Dapat bang ituring na aktibo ang *mapping*? |
| $mapping | `\Domain` | Ang *mapping* na sinusuri natin |
| $domain | `string` | |

### Source {#source}

Nakatakda sa [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) sa linya 391
