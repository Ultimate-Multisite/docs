---
id: wu_get_checkout_variables
title: ფილტრი - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# ფილტრი: wu_get_checkout_variables

საშუალებას აძლევს plugin-ის დეველოპერებს გაფილტრონ checkout გვერდის წინასწარ დაყენებული მნიშვნელობები.

ფრთხილად იყავით, გამოტოვებულმა keys-ებმა შეიძლება სრულიად გააფუჭოს checkout front-end-ზე.

## პარამეტრები

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $variables | `array` | ლოკალიზებული ცვლადები. |
| $checkout | `\Checkout` | checkout კლასი. |

### ვერსიიდან

- 2.0.0
### წყარო

განსაზღვრულია [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970)-ში, ხაზზე 1970


## აბრუნებს
ახალი ცვლადების array.
