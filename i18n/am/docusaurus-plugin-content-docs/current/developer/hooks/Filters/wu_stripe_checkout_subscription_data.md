---
id: wu_stripe_checkout_subscription_data
title: ማጣሪያ - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

የStripe የደንበኝነት መረጃን የሚያጣራ ነው። የsuccess_url ወይም የcancel_url ዋጋን መተካት ይችላል።

## መለኪያዎች {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $subscription_data | `array` | ለStripe ሊላኩ የሚገቡ መለኪያዎች አሬይ። |
| $gateway | `\Base_Gateway` | የአሁኑ የStripe Gateway ነገር (object)። |

### ከ {#since}

- 2.4.2
### ምንጭ {#source}

Defined in [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) at line 298
