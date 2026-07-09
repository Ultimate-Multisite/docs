---
id: wu_domain_mapping_register_filters
title: Omume - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Ụfọdụ plugin ga-echekwa URL tupu mapping arụ ọrụ ma ọ bụ wuo URLs n'ụzọ dị iche nke adịghị n'ime filters dị n'elu.

N'ọnọdụ dị otú ahụ, anyị chọrọ ịgbakwunye filters ndị ọzọ. Parameter nke abụọ a gafere bụ mangle_url callback. Anyị na-adụ ọdụ ka a ghara iji filter a ozugbo. Kama nke ahụ, jiri usoro Domain_Mapping::apply_mapping_to_url.

## Parameters {#parameters}

| Aha | Ụdị | Nkọwa |
|------|------|-------------|
| $mangle_url | `callable` | mangle callable ahụ. |
| $domain_mapper | `self` | Object a. |

### Kemgbe {#since}

- 2.0.0
### Isi mmalite {#source}

A kọwara ya na [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) na ahịrị 530
