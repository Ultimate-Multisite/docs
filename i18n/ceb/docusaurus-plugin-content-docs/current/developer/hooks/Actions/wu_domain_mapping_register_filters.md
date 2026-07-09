---
id: wu_domain_mapping_register_filters
title: Aksyon - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Ang ubang mga plugin motipig og URL sa wala pa mahimong aktibo ang mapping o mohimo og mga URL sa lahing paagi nga wala naapil sa mga filter sa ibabaw.

Sa mga kahimtang sama niana, gusto nato nga modugang og dugang nga mga filter. Ang ikaduhang parameter nga gipasa mao ang mangle_url callback. Girekomenda namo nga dili gamiton kini nga filter direkta. Hinuon, gamita ang Domain_Mapping::apply_mapping_to_url method.

## Mga Parameter

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $mangle_url | `callable` | Ang mangle callable. |
| $domain_mapper | `self` | Kini nga object. |

### Sukad

- 2.0.0
### Gigikanan

Gidefine sa [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) sa linya 530
