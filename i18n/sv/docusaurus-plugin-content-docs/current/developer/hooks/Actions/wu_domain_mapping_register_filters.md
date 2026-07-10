---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Vissa plugins kan spara URL:er som gjordes innan mappningen var aktiv, eller de kan bygga URL:er på ett sätt som inte täcks av filtren ovan.

I sådana fall vill vi lägga till ytterligare filter. Den andra parametern som skickas är `mangle_url` callback. Vi avråder från att använda detta filter direkt. Använd istället metoden `Domain_Mapping::apply_mapping_to_url`.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $mangle_url | `callable` | Den `mangle` callable-funktionen. |
| $domain_mapper | `self` | Detta objekt. |

### Sedan {#since}

- 2.0.0
### Källa {#source}

Definieras i [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) på rad 530
