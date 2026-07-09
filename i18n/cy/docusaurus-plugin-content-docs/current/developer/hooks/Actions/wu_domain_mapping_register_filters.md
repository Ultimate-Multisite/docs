---
id: wu_domain_mapping_register_filters
title: Gweithred - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Bydd rhai plugins yn cadw URL cyn i’r mapio fod yn weithredol neu byddant yn adeiladu URLs mewn modd gwahanol nad yw wedi’i gynnwys yn y filters uchod.

Mewn achosion felly, rydym am ychwanegu filters ychwanegol. Yr ail baramedr a basiwyd yw’r callback mangle_url. Rydym yn argymell peidio â defnyddio’r filter hwn yn uniongyrchol. Yn lle hynny, defnyddiwch y dull Domain_Mapping::apply_mapping_to_url.

## Paramedrau

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $mangle_url | `callable` | Y callable mangle. |
| $domain_mapper | `self` | Y gwrthrych hwn. |

### Ers

- 2.0.0
### Ffynhonnell

Wedi’i ddiffinio yn [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) ar linell 530
