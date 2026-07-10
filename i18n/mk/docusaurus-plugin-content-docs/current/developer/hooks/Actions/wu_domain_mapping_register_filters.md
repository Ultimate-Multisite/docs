---
id: wu_domain_mapping_register_filters
title: Дејство - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Некои plugin-и ќе зачуваат URL пред мапирањето да било активно или ќе градат URL-ови на различен начин што не е вклучен во горенаведените filter-и.

Во такви случаи, сакаме да додадеме дополнителни filter-и. Вториот параметар што се проследува е callback-от `mangle_url`. Препорачуваме да не се користи овој filter директно. Наместо тоа, користете го методот `Domain_Mapping::apply_mapping_to_url`.

## Параметри {#parameters}

| Име | Тип | Опис |
|------|------|-------------|
| $mangle_url | `callable` | mangle callable-от. |
| $domain_mapper | `self` | Овој објект. |

### Од {#since}

- 2.0.0
### Извор {#source}

Дефинирано во [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) на линија 530
