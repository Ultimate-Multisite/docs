---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Néhány plugin olyan URL-t menthet el, amikor a mapping még nem volt aktív, vagy más módon építheti az URL-eket, amit a fent említett filterek nem kapsanak.

Az ilyen esetekben további filtereket szeretnénk hozzáadni. A továbbított második paraméter a `mangle_url` callback. Nem javasoljuk e filter használatát közvetlenül. Ehelyett használja a `Domain_Mapping::apply_mapping_to_url` metódust.

## Paraméterek {#parameters}

| Neve | Típus | Leírás |
|------|------|-------------|
| $mangle_url | `callable` | A mangle callable. |
| $domain_mapper | `self` | Ez az objektum. |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) at line 530
