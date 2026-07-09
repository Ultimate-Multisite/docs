---
id: wu_stripe_generate_idempotency_key
title: តម្រង - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# តម្រង: wu_stripe_generate_idempotency_key

តម្រងតម្លៃ idempotency_key ដែលផ្ញើជាមួយជម្រើសគិតប្រាក់របស់ Stripe។

## ប៉ារ៉ាម៉ែត្រ

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $idempotency_key | `string` | តម្លៃនៃគន្លឹះ idempotency។ |
| $args | `array` | អាគុយម៉ង់ដែលប្រើដើម្បីជួយបង្កើតគន្លឹះ។ |
| $context | `string` | បរិបទដែលគន្លឹះ idempotency ត្រូវបានបង្កើត។ |

### ចាប់តាំងពី

- 3.5.0
### ប្រភព

បានកំណត់នៅក្នុង [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54) នៅបន្ទាត់ 54
