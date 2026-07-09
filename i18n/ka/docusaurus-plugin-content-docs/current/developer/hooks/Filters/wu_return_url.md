---
id: wu_return_url
title: ფილტრი - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# ფილტრი: wu_return_url {#filter-wureturnurl}

საშუალებას აძლევს დეველოპერებს შეცვალონ გადახდის კარიბჭის დაბრუნების URL, რომელიც გამოიყენება გადახდის პროცესების შემდეგ.

## პარამეტრები {#parameters}

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $return_url | `string` | URL, რომელზეც უნდა მოხდეს გადამისამართება პროცესის შემდეგ. |
| $gateway | `self` | გადახდის კარიბჭის ინსტანცია. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite გადახდის ინსტანცია. |
| $cart | `\WP_Ultimo\Checkout\Cart` | მიმდინარე Ultimate Multisite კალათის შეკვეთა. |

### ვერსიიდან {#since}

- 2.0.20
### წყარო {#source}

განსაზღვრულია [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683)-ში, ხაზზე 683


## აბრუნებს {#returns}
