---
id: wu_connector_enforcement_option_keys
title: "Filter - wu_connector_enforcement_option_keys"
sidebar_label: "wu_connector_enforcement_option_keys"
---

# Filter: wu_connector_enforcement_option_keys

Filter the list of AI provider option keys enforced from the main site.

Add option keys for custom or third-party AI provider plugins so their settings are also inherited from the main site on subsites.

This is useful when a custom AI provider stores API keys, endpoint URLs, model defaults, OAuth pools, or other provider settings in WordPress options that are not registered through the Connectors API. Enforcing those keys keeps customer subsites on the network-approved provider configuration while Metered Plans bills usage per subsite.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $keys | `string[]` | Option key names to enforce (already includes dynamically discovered connector keys and EXTRA_PROVIDER_OPTIONS). |

## Example

```php
add_filter('wu_connector_enforcement_option_keys', function ($keys) {
	$keys[] = 'my_ai_provider_api_key';
	$keys[] = 'my_ai_provider_endpoint_url';
	$keys[] = 'my_ai_provider_default_model';

	return $keys;
});
```

After adding keys, configure those options on the main site. Subsites will read the main-site values and write updates back through the main site for enforced options.

### Since

- 1.2.0
### Source

Defined in [`inc/managers/class-connector-enforcement.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-connector-enforcement.php#L206) at line 206
