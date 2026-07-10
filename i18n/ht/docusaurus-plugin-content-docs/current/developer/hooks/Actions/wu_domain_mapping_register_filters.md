---
id: wu_domain_mapping_register_filters
title: Aksyon - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Aksyon: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Kèk plugin ap sove URL anvan mapping lan te aktif oswa ap konstwi URL yo nan yon fason diferan ki pa enkli nan filters ki anwo yo.

Nan ka konsa, nou vle ajoute filters anplis. Dezyèm paramèt yo pase a se callback mangle_url la. Nou rekòmande pou pa itilize filter sa a dirèkteman. Olye de sa, itilize metòd Domain_Mapping::apply_mapping_to_url la.

## Paramèt {#parameters}

| Non | Kalite | Deskripsyon |
|------|------|-------------|
| $mangle_url | `callable` | Callable mangle la. |
| $domain_mapper | `self` | Objè sa a. |

### Depi {#since}

- 2.0.0
### Sous {#source}

Defini nan [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) nan liy 530
