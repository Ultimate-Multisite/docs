---
id: wu_stripe_generate_idempotency_key
title: فلٹر - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

یہ فلٹر Stripe چارج کے آپشنز کے ساتھ بھیجے جانے والے `idempotency_key` کی ویلیو کو فلٹر کرتا ہے۔

## پیرامیٹرز {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | idempotency key کی ویلیو۔ |
| $args | `array` | وہ آرگومنٹس جو key بنانے میں مدد کے لیے استعمال ہوتے ہیں۔ |
| $context | `string` | وہ سیاق و سباق (context) جس کے تحت idempotency key بنائی جا رہی ہے۔ |

### جب سے {#since}

- 3.5.0
### ماخذ (Source) {#source}

Defined in [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) at line 54
