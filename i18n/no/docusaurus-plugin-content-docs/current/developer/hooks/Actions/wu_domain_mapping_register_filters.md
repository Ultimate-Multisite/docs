---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Noen plugins kan lagre URL-er før kartleggingen var aktiv, eller de kan bygge URL-er på en annen måte som ikke er inkludert i filtrene ovenfor.

I slike tilfeller ønsker vi å legge til ekstra filtre. Det andre parameteret som sendes er `mangle_url` callback-en. Vi fraråder å bruke dette filteret direkte. Bruk heller metoden `Domain_Mapping::apply_mapping_to_url`.

## Parametere

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $mangle_url | `callable` | Den mangle callable-en. |
| $domain_mapper | `self` | Dette objektet. |

### Siden

- 2.0.0
### Kilde

Definert i [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) på linje 530
