---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Bazı plugin'ler, mapping aktif olmadan önce URL kaydetmiş olabilir ya da yukarıdaki filtrelerde yer almayan farklı bir yöntemle URL oluşturuyor olabilir.

Böyle durumlarda, ek filtreler eklemek isteriz. Geçirilen ikinci parametre `mangle_url` callback'idir. Bu filtreyi doğrudan kullanmamanızı tavsiye ederiz. Bunun yerine, `Domain_Mapping::apply_mapping_to_url` metodunu kullanın.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | Mangle callable'ı. |
| $domain_mapper | `self` | Bu nesne. |

### Since

- 2.0.0
### Source

Defined in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) at line 530
