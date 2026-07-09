---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Stripe ఛార్జ్ ఆప్షన్లతో పంపబడే `idempotency_key` విలువను ఇది ఫిల్టర్ చేస్తుంది.

## పారామీటర్లు (Parameters) {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | ఐడియంపోటెన్సీ కీ యొక్క విలువ. |
| $args | `array` | కీని రూపొందించడానికి సహాయపడే ఆర్గ్యుమెంట్లు. |
| $context | `string` | ఐడియంపోటెన్సీ కీ రూపొందించబడిన సందర్భం (context). |

### ఎప్పటి నుండి (Since) {#since}

- 3.5.0
### మూలం (Source) {#source}

[`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) లోని 54వ లైన్‌లో నిర్వచించబడింది.
