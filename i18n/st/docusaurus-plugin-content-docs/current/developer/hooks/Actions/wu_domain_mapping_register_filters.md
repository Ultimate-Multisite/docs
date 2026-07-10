---
id: wu_domain_mapping_register_filters
title: Ketso - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Ketso: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Di-plugin tse ding di tla boloka URL pele mapping e sebetsa kapa di tla aha di-URL ka mokgwa o fapaneng o sa kenyelletsoang ho di-filters tse ka hodimo.

Maemong a jwalo, re batla ho eketsa di-filters tse ding. Paramethara ya bobedi e fetisitsweng ke callback ya mangle_url. Re kgothaletsa hore o se ke wa sebedisa filter ena ka kotloloho. Ho e-na le hoo, sebedisa mokgwa wa Domain_Mapping::apply_mapping_to_url.

## Diparamethara {#parameters}

| Lebitso | Mofuta | Tlhaloso |
|------|------|-------------|
| $mangle_url | `callable` | Callable ya mangle. |
| $domain_mapper | `self` | Ntho ena. |

### Ho tloha ka {#since}

- 2.0.0
### Mohlodi {#source}

E hlalositswe ho [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) moleng wa 530
