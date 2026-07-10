---
id: wu_domain_mapping_register_filters
title: Dejanje - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Dejanje: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Nekateri plugin-i bodo shranili URL, preden je bila preslikava aktivna, ali pa bodo URL-je zgradili na drugačen način, ki ni vključen v zgornje filtre.

V takih primerih želimo dodati dodatne filtre. Drugi posredovani parameter je povratni klic mangle_url. Odsvetujemo neposredno uporabo tega filtra. Namesto tega uporabite metodo Domain_Mapping::apply_mapping_to_url.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $mangle_url | `callable` | Klicljiva funkcija mangle. |
| $domain_mapper | `self` | Ta objekt. |

### Od različice {#since}

- 2.0.0
### Vir {#source}

Definirano v [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) v vrstici 530
