---
id: wu_stripe_checkout_subscription_data
title: តម្រង - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# តម្រង: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

តម្រងទិន្នន័យការជាវរបស់ Stripe។ អាចកែជំនួស success_url ឬ cancel_url បាន។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $subscription_data | `array` | អារេនៃប៉ារ៉ាម៉ែត្រដើម្បីបញ្ជូនទៅ Stripe។ |
| $gateway | `\Base_Gateway` | វត្ថុ Stripe Gateway បច្ចុប្បន្ន។ |

### ចាប់ពី {#since}

- 2.4.2
### ប្រភព {#source}

បានកំណត់ក្នុង [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) នៅបន្ទាត់ 298
