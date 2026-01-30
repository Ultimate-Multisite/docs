---
id: wu_domain_mapping_register_filters
title: "Action - wu_domain_mapping_register_filters"
sidebar_label: "wu_domain_mapping_register_filters"
---

# Action: wu_domain_mapping_register_filters

Some plugins will save URL before the mapping was active or will build URLs in a different manner that is not included on the above filters.

In cases like that, we want to add additional filters. The second parameter passed is the mangle_url callback. We recommend against using this filter directly. Instead, use the Domain_Mapping::apply_mapping_to_url method.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | The mangle callable. |
| $domain_mapper | `self` | This object. |

### Since

- 2.0.0
### Source

Defined in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) at line 530

