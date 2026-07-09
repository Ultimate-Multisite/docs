---
id: wu_stripe_checkout_subscription_data
title: ფილტრი - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# ფილტრი: wu_stripe_checkout_subscription_data {#filter-wustripecheckoutsubscriptiondata}

ფილტრავს Stripe Subscription მონაცემებს. შეუძლია success_url-ის ან cancel_url-ის გადაფარვა.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $subscription_data | `array` | Stripe-სთვის გადასაცემი პარამეტრების მასივი. |
| $gateway | `\Base_Gateway` | მიმდინარე Stripe Gateway ობიექტი. |

### ვერსიიდან {#since}

- 2.4.2
### წყარო {#source}

განსაზღვრულია [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298)-ში, 298-ე ხაზზე
