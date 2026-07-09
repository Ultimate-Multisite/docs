---
id: wu_stripe_existing_plan_id
title: ფილტრი - wu_stripe_existing_plan_id
sidebar_label: wu_stripe_existing_plan_id
_i18n_hash: 153242c21b0a894c554c77872a96d1cd
---
# ფილტრი: wu_stripe_existing_plan_id

ფილტრავს გეგმის ID-ს, რომლის შემოწმებაც საჭიროა. თუ ის არსებობს, ახალი გამოწერა ამ გეგმას გამოიყენებს.

## პარამეტრები

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $plan_id | `string` | Stripe გეგმის ID, რომლის შემოწმებაც საჭიროა. |
| $membership_level | `object` | წევრობის დონის ობიექტი. |

### წყარო

განსაზღვრულია [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2653)-ში, 2653-ე ხაზზე
