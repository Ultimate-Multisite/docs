---
id: wu_domain_mapping_register_filters
title: कार्य - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

केही plugins ले mapping सक्रिय हुनुअघि URL सुरक्षित गर्नेछन् वा माथिका filters मा समावेश नभएको फरक तरिकाले URLs बनाउनेछन्।

त्यस्ता अवस्थाहरूमा, हामी थप filters थप्न चाहन्छौँ। पास गरिएको दोस्रो parameter mangle_url callback हो। हामी यो filter सिधै प्रयोग नगर्न सिफारिस गर्छौँ। यसको सट्टा, Domain_Mapping::apply_mapping_to_url method प्रयोग गर्नुहोस्।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | mangle callable। |
| $domain_mapper | `self` | यो object। |

### Since {#since}

- 2.0.0
### Source {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) मा line 530 मा परिभाषित गरिएको।
