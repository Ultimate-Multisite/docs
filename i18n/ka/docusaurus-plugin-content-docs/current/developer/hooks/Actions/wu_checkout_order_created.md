---
id: wu_checkout_order_created
title: მოქმედება - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created

ამოქმედდება მას შემდეგ, რაც გადახდის შეკვეთა სრულად იქნება აწყობილი.

დანამატებს შეუძლიათ ამის გამოყენება მეორეული წევრობების შესაქმნელად პროდუქტებისთვის დამოუკიდებელი ბილინგის ციკლებით.

## პარამეტრები

| Name | Type | აღწერა |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | კალათის/შეკვეთის ობიექტი. |
| $customer | `\WP_Ultimo\Models\Customer` | კლიენტი. |
| $membership | `\WP_Ultimo\Models\Membership` | ძირითადი წევრობა. |
| $payment | `\WP_Ultimo\Models\Payment` | გადახდა. |

### ვერსიიდან

- 2.5.0
### წყარო

განსაზღვრულია [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891)-ში, 891-ე ხაზზე
