---
id: wu_domain_mapping_register_filters
title: Handling - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Handling: wu_domain_mapping_register_filters

Nogle plugins gemmer URL'en, før mappingen var aktiv, eller bygger URL'er på en anden måde, som ikke er inkluderet i filtrene ovenfor.

I sådanne tilfælde vil vi tilføje yderligere filtre. Den anden parameter, der sendes, er mangle_url-callbacken. Vi anbefaler ikke at bruge dette filter direkte. Brug i stedet Domain_Mapping::apply_mapping_to_url-metoden.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $mangle_url | `callable` | Den mangle-callable. |
| $domain_mapper | `self` | Dette objekt. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) på linje 530
