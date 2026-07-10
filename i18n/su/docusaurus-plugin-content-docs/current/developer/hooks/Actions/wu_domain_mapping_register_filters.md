---
id: wu_domain_mapping_register_filters
title: Aksi - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Aksi: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Sababaraha plugin bakal nyimpen URL saméméh mapping aktip atawa bakal ngawangun URL ku cara anu béda anu teu kaasup dina filters di luhur.

Dina kasus kawas kitu, urang rék nambahkeun filters tambahan. Parameter kadua anu diteruskeun nyaéta callback mangle_url. Kami nyarankeun ulah ngagunakeun filter ieu sacara langsung. Gantina, pake metode Domain_Mapping::apply_mapping_to_url.

## Parameter {#parameters}

| Ngaran | Tipe | Pedaran |
|------|------|-------------|
| $mangle_url | `callable` | Callable mangle. |
| $domain_mapper | `self` | Objék ieu. |

### Ti mimiti {#since}

- 2.0.0
### Sumber {#source}

Ditetepkeun dina [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) dina garis 530
