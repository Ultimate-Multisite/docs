---
id: wu_stripe_existing_product_id
title: ფილტრი - wu_stripe_existing_product_id
sidebar_label: wu_stripe_existing_product_id
_i18n_hash: 92eb984fe341b1ce2d56ea2eccff8100
---
# ფილტრი: wu_stripe_existing_product_id

ფილტრავს იმ პროდუქტის ID-ს, რომლის შემოწმებაც უნდა მოხდეს. თუ ის არსებობს, ახალი გამოწერა ამ პროდუქტს გამოიყენებს.

## პარამეტრები {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $product_id | `string` | Stripe პროდუქტის ID, რომლის შემოწმებაც უნდა მოხდეს. |
| $name | `string` | პროდუქტის სახელი. |

### წყარო {#source}

განსაზღვრულია [`inc/gateways/class-base-stripe-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-stripe-gateway.php#L2741)-ში, ხაზზე 2741
