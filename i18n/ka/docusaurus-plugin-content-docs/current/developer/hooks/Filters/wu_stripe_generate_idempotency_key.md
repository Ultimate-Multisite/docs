---
id: wu_stripe_generate_idempotency_key
title: ფილტრი - wu_stripe_generate_idempotency_key
sidebar_label: wu_stripe_generate_idempotency_key
_i18n_hash: 0868609b646589822aead3d4a5201088
---
# ფილტრი: wu_stripe_generate_idempotency_key

ფილტრავს idempotency_key მნიშვნელობას, რომელიც იგზავნება Stripe-ის გადახდის პარამეტრებთან ერთად.

## პარამეტრები

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $idempotency_key | `string` | იდემპოტენტურობის გასაღების მნიშვნელობა. |
| $args | `array` | არგუმენტები, რომლებიც გამოიყენება გასაღების გენერირებაში დასახმარებლად. |
| $context | `string` | კონტექსტი, რომლის ფარგლებშიც გენერირდება იდემპოტენტურობის გასაღები. |

### ვერსიიდან

- 3.5.0
### წყარო

განსაზღვრულია [`inc/functions/checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/functions/checkout.php#L54)-ში, 54-ე ხაზზე
