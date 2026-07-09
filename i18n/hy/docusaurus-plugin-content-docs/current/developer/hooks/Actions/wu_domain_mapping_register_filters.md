---
id: wu_domain_mapping_register_filters
title: Գործողություն - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Գործողություն՝ wu_domain_mapping_register_filters

Որոշ plugin-ներ կպահպանեն URL-ը նախքան mapping-ի ակտիվ լինելը կամ կկառուցեն URL-ները այլ եղանակով, որը ներառված չէ վերոնշյալ filter-ներում։

Նման դեպքերում մենք ցանկանում ենք ավելացնել լրացուցիչ filter-ներ։ Փոխանցված երկրորդ parameter-ը mangle_url callback-ն է։ Խորհուրդ ենք տալիս չօգտագործել այս filter-ը ուղղակիորեն։ Փոխարենը օգտագործեք Domain_Mapping::apply_mapping_to_url method-ը։

## Parameter-ներ

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | mangle callable-ը։ |
| $domain_mapper | `self` | Այս object-ը։ |

### Since

- 2.0.0
### Source

Սահմանված է [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530)-ում՝ 530-րդ տողում։
