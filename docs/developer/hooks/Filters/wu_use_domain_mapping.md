---
id: wu_use_domain_mapping
title: "Filter - wu_use_domain_mapping"
sidebar_label: "wu_use_domain_mapping"
---

# Filter: wu_use_domain_mapping

Determine whether a mapping should be used

Typically, you'll want to only allow active mappings to be used. However, if you want to use more advanced logic, or allow non-active domains to be mapped too, simply filter here.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | Should the mapping be treated as active? |
| $mapping | `\Domain` | Mapping that we're inspecting |
| $domain | `string` |  |

### Source

Defined in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) at line 391

