---
id: wu_use_domain_mapping
title: Filtras - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filtras: wu_use_domain_mapping

Nustato, ar susiejimas turėtų būti naudojamas

Paprastai norėsite leisti naudoti tik aktyvius susiejimus. Tačiau, jei norite naudoti sudėtingesnę logiką arba leisti susieti ir neaktyvius domenus, tiesiog filtruokite čia.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $is_active | `bool` | Ar susiejimas turėtų būti laikomas aktyviu? |
| $mapping | `\Domain` | Susiejimas, kurį tikriname |
| $domain | `string` |  |

### Šaltinis {#source}

Apibrėžta [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) 391 eilutėje
