---
id: wu_stripe_checkout_subscription_data
title: ຕົວກອງ - wu_stripe_checkout_subscription_data
sidebar_label: wu_stripe_checkout_subscription_data
_i18n_hash: 974298c0105287786ac2a8f47914cdfe
---
# Filter: wu_stripe_checkout_subscription_data

Filter ຂໍ້ມູນ Subscription ຂອງ Stripe. ສາມາດ override success_url ຫຼື cancel_url ໄດ້.

## ພາລາມິເຕີ

| ຊື່ | ປະເພດ | ຄຳອະທິບາຍ |
|------|------|-------------|
| $subscription_data | `array` | ອາເຣຂອງພາລາມິເຕີສຳລັບສົ່ງໄປຫາ Stripe. |
| $gateway | `\Base_Gateway` | ອອບເຈັກ Stripe Gateway ປັດຈຸບັນ. |

### ຕັ້ງແຕ່

- 2.4.2
### ແຫຼ່ງທີ່ມາ

ຖືກກຳນົດໄວ້ໃນ [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L298) ທີ່ແຖວ 298
