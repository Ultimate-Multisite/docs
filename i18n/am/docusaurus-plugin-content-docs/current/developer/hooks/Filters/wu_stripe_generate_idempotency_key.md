---
id: wu_stripe_generate_idempotency_key
title: Filter - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# Filter: wu_stripe_generate_idempotency_key

የStripe ክፍያ አማራጮች ጋር የሚላከውን የidempotency_key ዋጋ የሚያጣራ።

## ፓራሜትሮች

| Name | Type | መግለጫ |
|------|------|-------------|
| $idempotency_key | `string` | የidempotency key ዋጋ። |
| $args | `array` | ቁልፉን ለመፍጠር የሚረዱ ክርክሮች። |
| $context | `string` | የidempotency key የሚፈጠረውበት አውድ። |

### ከምን ጊዜ ጀምሮ

- 3.5.0
### ምንጭ

[`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) ላይ በ54ኛው መስመር ተገልጿል።
