---
id: wu_domain_mapping_register_filters
title: Actie - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Sommige plug-ins slaan URL op voordat de mapping actief was of bouwen URL's op een andere manier die niet in de bovenstaande filters is opgenomen.

In dergelijke gevallen willen we extra filters toevoegen. De tweede doorgegeven parameter is de mangle_url callback. We raden af om deze filter rechtstreeks te gebruiken. Gebruik in plaats daarvan de Domain_Mapping::apply_mapping_to_url methode.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | De mangle callable. |
| $domain_mapper | `self` | Dit object. |

### Since

- 2.0.0
### Source

Defined in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) at line 530
