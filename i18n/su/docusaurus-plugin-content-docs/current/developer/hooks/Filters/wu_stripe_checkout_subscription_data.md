---
id: wu_stripe_checkout_subscription_data
title: Saringan - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

Filter data Langganan Stripe. Bisa nimpa success_url atawa cancel_url.

## Parameter {#parameters}

| Ngaran | Tipe | Pedaran |
|------|------|-------------|
| $subscription_data | `array` | Hiji array parameter pikeun dikirimkeun ka Stripe. |
| $gateway | `\Base_Gateway` | Objék Stripe Gateway ayeuna. |

### Ti saprak {#since}

- 2.4.2
### Sumber {#source}

Ditetepkeun dina [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) dina baris 298
