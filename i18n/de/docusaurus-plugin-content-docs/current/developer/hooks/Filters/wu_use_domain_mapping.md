---
id: wu_use_domain_mapping
title: Filter - wu_use_domain_mapping
sidebar_label: wu_use_domain_mapping
_i18n_hash: 34f9d3e6a6d1b98dd72cf5c21250b6e7
---
# Filter: wu_use_domain_mapping

Determine whether a mapping should be used

Typically, you'll want to only allow active mappings to be used. However, if you want to use more advanced logic, or allow non-active domains to be mapped too, simply filter here.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $is_active | `bool` | Soll die Zuordnung als aktiv behandelt werden? |
| $mapping | `\Domain` | Zuordnung, die wir untersuchen |
| $domain | `string` |  |

### Source

Defined in [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L391) at line 391
