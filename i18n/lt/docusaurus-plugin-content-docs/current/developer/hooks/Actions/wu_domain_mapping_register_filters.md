---
id: wu_domain_mapping_register_filters
title: Veiksmas - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Veiksmas: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Kai kurie įskiepiai išsaugos URL prieš tai, kai susiejimas buvo aktyvus, arba kurs URL kitu būdu, kuris neįtrauktas į pirmiau nurodytus filtrus.

Tokiais atvejais norime pridėti papildomų filtrų. Antras perduodamas parametras yra mangle_url atgalinio iškvietimo funkcija. Nerekomenduojame šio filtro naudoti tiesiogiai. Vietoj to naudokite `Domain_Mapping::apply_mapping_to_url` metodą.

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $mangle_url | `callable` | Mangle atgalinio iškvietimo funkcija. |
| $domain_mapper | `self` | Šis objektas. |

### Nuo {#since}

- 2.0.0
### Šaltinis {#source}

Apibrėžta [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) 530 eilutėje
