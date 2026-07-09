---
id: wu_domain_mapping_register_filters
title: عمل - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# عمل: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

ڪجهه plugin URL محفوظ ڪندا ان کان اڳ جو mapping فعال ٿي هجي يا URL اهڙي مختلف طريقي سان ٺاهيندا جيڪو مٿي ڏنل filters ۾ شامل نه آهي.

اهڙين حالتن ۾، اسان اضافي filters شامل ڪرڻ چاهيون ٿا. پاس ڪيل ٻيو parameter mangle_url callback آهي. اسان هي filter سڌو استعمال ڪرڻ جي سفارش نٿا ڪريون. ان جي بدران، Domain_Mapping::apply_mapping_to_url method استعمال ڪريو.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | mangle callable. |
| $domain_mapper | `self` | هي object. |

### کان وٺي {#since}

- 2.0.0
### ذريعو {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) ۾ line 530 تي تعريف ٿيل
