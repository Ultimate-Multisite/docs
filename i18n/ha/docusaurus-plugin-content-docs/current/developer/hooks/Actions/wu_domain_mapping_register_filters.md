---
id: wu_domain_mapping_register_filters
title: Aiki - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Wasu plugins za su adana URL kafin mapping ya fara aiki ko kuma za su gina URLs ta wata hanya daban wadda ba ta cikin filters na sama.

A irin waɗannan lokuta, muna son ƙara ƙarin filters. Parameter na biyu da aka wuce shi ne callback na mangle_url. Muna ba da shawarar kada a yi amfani da wannan filter kai tsaye. Maimakon haka, yi amfani da hanyar Domain_Mapping::apply_mapping_to_url.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | Callable na mangle. |
| $domain_mapper | `self` | Wannan abu. |

### Tun daga {#since}

- 2.0.0
### Tushe {#source}

An bayyana a cikin [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) a layi na 530
