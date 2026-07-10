---
id: wu_stripe_generate_idempotency_key
title: Φίλτρο - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key {#filter-wustripegenerateidempotencykey}

Φιλτράρει την τιμή του `idempotency_key` που αποστέλεται μαζί με τις επιλογές χρέωσης του Stripe.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $idempotency_key | `string` | Τιμή του idempotency key. |
| $args | `array` | Συμβολοσειρές που χρησιμοποιούνται για τη βοήθεια στη δημιουργία του key. |
| $context | `string` | Το πλαίσιο στο οποίο δημιουργείται το idempotency key. |

### Since {#since}

- 3.5.0
### Source {#source}

Ορίζεται στο [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) στην γραμμή 54
