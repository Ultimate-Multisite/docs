---
id: wu_domain_mapping_register_filters
title: عمل - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

ڪجهه plugins URL کي mapping فعال ٿيڻ کان اڳ محفوظ ڪندا يا URLs کي اهڙي مختلف طريقي سان ٺاهيندا جيڪو مٿين filters ۾ شامل ناهي.

اهڙين حالتن ۾، اسان اضافي filters شامل ڪرڻ چاهيون ٿا. پاس ڪيل ٻيو parameter mangle_url callback آهي. اسان هن filter کي سڌو استعمال ڪرڻ جي سفارش نٿا ڪريون. ان جي بدران، Domain_Mapping::apply_mapping_to_url method استعمال ڪريو.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | mangle callable. |
| $domain_mapper | `self` | هي object. |

### کان وٺي

- 2.0.0
### ماخذ

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) ۾ لائين 530 تي بيان ڪيل
