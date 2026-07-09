---
id: wu_apply_signup_fee
title: ფილტრი - wu_apply_signup_fee
sidebar_label: wu_apply_signup_fee
_i18n_hash: b6a5ac9b0ef2d459003fa02766ad6f81
---
# ფილტრი: wu_apply_signup_fee {#filter-wuapplysignupfee}

ფილტრავს, უნდა დაემატოს თუ არა რეგისტრაციის საფასური.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $add_signup_fee | `bool` | დაემატოს თუ არა რეგისტრაციის საფასური. |
| $product | `object` | წევრობის დონის ობიექტი. |
| $this | `\WP_Ultimo\Checkout\Cart` | რეგისტრაციის ობიექტი. |

### ვერსიიდან {#since}

- 3.1
### წყარო {#source}

განსაზღვრულია [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1769)-ში, ხაზზე 1769
