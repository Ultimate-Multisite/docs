---
id: wu_maybe_create_customer
title: მოქმედება - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

საშუალებას აძლევს პლაგინის დეველოპერებს, შეასრულონ დამატებითი მოქმედებები, როდესაც მომხმარებელი ემატება.

მაგალითად, აქ ვამატებთ hooks-ს customer-&gt;user-ის მთავარ საიტზე დამატებისთვისაც.

## პარამეტრები

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $customer | `\Customer` | მომხმარებელი, რომელიც შესაძლოა შეიქმნა. |
| $checkout | `\Checkout` | მიმდინარე checkout-ის კლასი. |

### ვერსიიდან

- 2.0.0
### წყარო

განსაზღვრულია [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156)-ში, ხაზზე 1156
