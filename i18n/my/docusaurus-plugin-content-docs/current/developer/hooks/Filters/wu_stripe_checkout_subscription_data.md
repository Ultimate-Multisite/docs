---
id: wu_stripe_checkout_subscription_data
title: စစ်ထုတ်ခြင်း - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

Stripe စာရင်းပေးသွင်းမှု အချက်အလက်များကို စစ်ထုတ်ပေးသည့် (filter) လုပ်ဆောင်ချက် ဖြစ်ပါသည်။ ဤနေရာမှတစ်ဆင့် success_url သို့မဟုတ် cancel_url များကိုလည်း အစားထိုး (override) ပေးနိုင်ပါသည်။

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Stripe သို့ ပေးပို့ရမည့် ပါရာမီတာများ စုစည်းမှု (array) ဖြစ်ပါသည်။ |
| $gateway | `\Base_Gateway` | လက်ရှိ Stripe Gateway object ဖြစ်ပါသည်။ |

### Since {#since}

- 2.4.2
### Source {#source}

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) at line 298
