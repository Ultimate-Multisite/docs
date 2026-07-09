---
id: wu_domain_mapping_register_filters
title: Igikorwa - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Igikorwa: wu_domain_mapping_register_filters

Plugins zimwe zizabika URL mbere y’uko mapping iba ikora cyangwa zizubaka URLs mu buryo butandukanye butari mu mafiriteri yavuzwe haruguru.

Mu bihe nk’ibyo, dushaka kongeramo amafiriteri y’inyongera. Parameter ya kabiri itangwa ni callback ya mangle_url. Tugira inama yo kudakoresha iyi filter mu buryo butaziguye. Ahubwo, koresha uburyo bwa Domain_Mapping::apply_mapping_to_url.

## Parameters

| Izina | Ubwoko | Ibisobanuro |
|------|------|-------------|
| $mangle_url | `callable` | Callable ya mangle. |
| $domain_mapper | `self` | Iki kintu. |

### Kuva

- 2.0.0
### Inkomoko

Bisobanuwe muri [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) ku murongo wa 530
