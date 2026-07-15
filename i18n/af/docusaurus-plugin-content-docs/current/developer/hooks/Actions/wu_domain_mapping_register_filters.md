---
id: wu_domain_mapping_register_filters
title: Aksie - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Sommige plugins sal URL's stoor voordat die mapping aktief was, of sal URL's op 'n ander manier bou wat nie op die bogenoemde filters ingesluit is nie.

In sulke gevalle wil ons bykomende filters byvoeg. Die tweede parameter wat oorgedra word, is die `mangle_url` callback. Ons raai daarteen om hierdie filter direk te gebruik. Gebruik eerder die `Domain_Mapping::apply_mapping_to_url` metode.

## Parameters {#parameters}

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $mangle_url | `callable` | Die mangle-aanroep. |
| $domain_mapper | `self` | Hierdie objek. |

### Sedert {#since}

- 2.0.0
### Bron {#source}

Gedefinieer in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) by lyn 530
