---
id: wu_domain_mapping_register_filters
title: Gnìomh - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Gnìomh: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Sàbhalaidh cuid de plugins URL mus robh am mapadh gnìomhach, no togaidh iad URLan ann an dòigh eadar-dhealaichte nach eil air a ghabhail a-steach anns na criathragan gu h-àrd.

Ann an cùisean mar sin, tha sinn airson criathragan a bharrachd a chur ris. Is e an dàrna paramadair a thèid seachad gairm-air-ais mangle_url. Tha sinn a’ moladh gun a bhith a’ cleachdadh na criathraige seo gu dìreach. An àite sin, cleachd modh Domain_Mapping::apply_mapping_to_url.

## Paramadairean {#parameters}

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $mangle_url | `callable` | An callable mangle. |
| $domain_mapper | `self` | An t-oibseact seo. |

### Bho {#since}

- 2.0.0
### Tùs {#source}

Air a mhìneachadh ann an [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) aig loidhne 530
