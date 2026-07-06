---
id: wu_ai_token_rates
title: "Filter - wu_ai_token_rates"
sidebar_label: "wu_ai_token_rates"
---

# Filter: wu_ai_token_rates

Filter the AI token billing rates before Metered Plans calculates the cost of an AI request.

Rates are keyed by model ID. Each model entry contains:

- `input_rate` — price per 1 million prompt/input tokens in your site currency
- `output_rate` — price per 1 million completion/output tokens in your site currency

Metered Plans first tries an exact model ID match. If no exact match exists, it can use prefix matching, so a key such as `claude-sonnet-4` can match a versioned ID that starts with that prefix.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $rates | `array` | Model rates from network option. |

## Example

```php
add_filter('wu_ai_token_rates', function ($rates) {
	$rates['custom-premium-model'] = [
		'input_rate'  => 4.00,
		'output_rate' => 12.00,
	];

	// Prefix match versioned model IDs such as custom-fast-model-2026-07.
	$rates['custom-fast-model'] = [
		'input_rate'  => 0.25,
		'output_rate' => 1.00,
	];

	return $rates;
});
```

Use this filter when rates come from an external pricing service, when a custom connector exposes model IDs not saved in the network rate table, or when you want to apply temporary pricing changes without editing each product.

### Since

- 1.1.0
### Source

Defined in [`inc/managers/class-ai-usage-listener.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-metered-plans/blob/main/inc/managers/class-ai-usage-listener.php#L266) at line 266
