---
id: wu_domain_mapping_register_filters
title: ھەرىكەت - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

بەزى pluginلار mapping ئاكتىپ بولۇشتىن بۇرۇن URLنى ساقلاپ قويىدۇ ياكى يۇقىرىدىكى filters ئىچىگە كىرگۈزۈلمىگەن باشقا ئۇسۇلدا URLلارنى قۇرىدۇ.

شۇنداق ئەھۋاللاردا، بىز قوشۇمچە filters قوشماقچى بولىمىز. يەتكۈزۈلگەن ئىككىنچى parameter بولسا mangle_url callback. بۇ filterنى بىۋاسىتە ئىشلىتىشنى تەۋسىيە قىلمايمىز. ئۇنىڭ ئورنىغا Domain_Mapping::apply_mapping_to_url methodنى ئىشلىتىڭ.

## پارامېتىرلار {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | mangle callable. |
| $domain_mapper | `self` | بۇ object. |

### باشلاپ {#since}

- 2.0.0
### مەنبە {#source}

[`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) ئىچىدە 530-قۇردا ئېنىقلانغان
