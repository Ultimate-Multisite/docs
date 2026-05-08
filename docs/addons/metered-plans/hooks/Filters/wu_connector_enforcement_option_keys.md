---
id: wu_connector_enforcement_option_keys
title: "Filter - wu_connector_enforcement_option_keys"
sidebar_label: "wu_connector_enforcement_option_keys"
---

# Filter: wu_connector_enforcement_option_keys

Filter the list of AI provider option keys enforced from the main site.

Add option keys for custom or third-party AI provider plugins so their settings are also inherited from the main site on subsites.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | Option key names to enforce (already includes dynamically discovered connector keys and EXTRA_PROVIDER_OPTIONS). |

### Since

- 1.2.0
### Source

Defined in [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) at line 206

