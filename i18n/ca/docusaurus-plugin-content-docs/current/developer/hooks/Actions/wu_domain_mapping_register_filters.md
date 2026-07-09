---
id: wu_domain_mapping_register_filters
title: Acció - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Aquesta és la funció: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Alguns plugins poden guardar l'URL abans que el mape sigui actiu o construir les URLs d'una manera que no està inclosa en els filtres anteriors.

En casos com aquests, volem afegir filtres addicionals. El segon paràmetre que es passa és la funció de callback `mangle_url`. No recomanem utilitzar aquest filtre directament. En canvi, utilitza el mètode `Domain_Mapping::apply_mapping_to_url`.

## Paràmetres {#parameters}

| Nom | Tip | Descripció |
|------|------|-------------|
| $mangle_url | `callable` | La funció de callback (mangle callable). |
| $domain_mapper | `self` | Aquest object. |

### Des de {#since}

- 2.0.0
### Font {#source}

Definida en [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) a la línia 530
