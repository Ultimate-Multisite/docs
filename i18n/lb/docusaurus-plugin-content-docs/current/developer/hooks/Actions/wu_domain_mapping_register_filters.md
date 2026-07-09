---
id: wu_domain_mapping_register_filters
title: Aktioun - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Aktioun: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

E puer Pluginen späicheren d'URL, ier de Mapping aktiv war, oder bauen URLen op eng aner Manéier, déi net an den uewe genannte Filteren abegraff ass.

An esou Fäll wëlle mir zousätzlech Filtere bäisetzen. Den zweete Parameter, deen iwwerginn gëtt, ass de mangle_url Callback. Mir roden dovun of, dëse Filter direkt ze benotzen. Benotzt amplaz d'Domain_Mapping::apply_mapping_to_url Method.

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $mangle_url | `callable` | De mangle callable. |
| $domain_mapper | `self` | Dësen Objet. |

### Zënter {#since}

- 2.0.0
### Quell {#source}

Definéiert an [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) op der Linn 530
