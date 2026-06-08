---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

Stripe ചാർജ് ഓപ്ഷനുകളോടൊപ്പം അയയ്ക്കുന്ന `idempotency_key` മൂല്യം ഇത് ഫിൽട്ടർ ചെയ്യുന്നു.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | ഐഡെംപോൻസി കീയുടെ മൂല്യം. |
| $args | `array` | കീ ജനറേറ്റ് ചെയ്യാൻ സഹായിക്കുന്ന ആർഗ്യുമെന്റുകൾ. |
| $context | `string` | ഐഡെംപോൻസി കീ ഉണ്ടാക്കുന്ന സന്ദർഭം (Context). |

### Since

- 3.5.0
### Source

Defined in [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) at line 54
