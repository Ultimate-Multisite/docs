---
id: wu_domain_mapping_register_filters
title: Hetsika - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Hetsika: wu_domain_mapping_register_filters

Ny fanitarana sasany dia hitahiry URL talohan'ny nahavitrika ny mapping na hanangana URL amin'ny fomba hafa izay tsy tafiditra ao amin'ireo sivana etsy ambony.

Amin'ny tranga toy izany, te-hanampy sivana fanampiny isika. Ny parameter faharoa ampitaina dia ny callback mangle_url. Tsy mamporisika ny fampiasana mivantana ity sivana ity izahay. Fa aleo ampiasaina ny fomba Domain_Mapping::apply_mapping_to_url.

## Parameter {#parameters}

| Anarana | Karazana | Famaritana |
|------|------|-------------|
| $mangle_url | `callable` | Ny callable mangle. |
| $domain_mapper | `self` | Ity object ity. |

### Nanomboka tamin'ny {#since}

- 2.0.0
### Loharano {#source}

Voafaritra ao amin'ny [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) amin'ny andalana 530
