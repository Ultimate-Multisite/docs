---
id: wu_stripe_checkout_subscription_data
title: వడపోత - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

Stripe సబ్‌స్క్రిప్షన్ డేటాను ఫిల్టర్ చేస్తుంది. దీని ద్వారా `success_url` లేదా `cancel_url` ను ఓవర్‌రైడ్ చేయవచ్చు.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | Stripe కు పంపవలసిన పారామీటర్ల శ్రేణి (array). |
| $gateway | `\Base_Gateway` | ప్రస్తుతం ఉన్న Stripe గేట్‌వే ఆబ్జెక్ట్. |

### Since {#since}

- 2.4.2
### Source {#source}

[`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) లోని 298వ లైన్‌లో నిర్వచించబడింది.
