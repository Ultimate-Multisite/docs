---
id: wu_stripe_checkout_subscription_data
title: ഫിൽട്ടർ - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

Stripe സബ്‌സ്‌ക്രിപ്‌ഷൻ ഡാറ്റ ഫിൽട്ടർ ചെയ്യാൻ ഉപയോഗിക്കുന്നു. ഇതിലൂടെ success_url അല്ലെങ്കിൽ cancel_url എന്നിവ മാറ്റാൻ സാധിക്കും.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Stripe-ലേക്ക് കൈമാറേണ്ട പാരാമീറ്ററുകൾ അടങ്ങിയ ഒരു അറേ. |
| $gateway | `\Base_Gateway` | നിലവിലെ Stripe ഗേറ്റ്‌വേ ഒബ്ജക്റ്റ്. |

### Since {#since}

- 2.4.2
### Source {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) എന്ന ഫയലിലെ 298-ാം വരിയിൽ നിർവചിച്ചിരിക്കുന്നു.
