---
id: wu_woocommerce_line_item_params
title: ფილტრი - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# Filter: wu_woocommerce_line_item_params

გაფილტრავს პარამეტრებს, რომლებიც გამოიყენება WooCommerce Cart-ში ხაზის ერთეულების შესაქმნელად, სანამ მომხმარებელი WooCommerce checkout-ზე გადამისამართდება.

## პარამეტრები

| სახელი | ტიპი | აღწერა |
|------|------|-------------|
| $line_item_params | `array` | კალათის ხაზის ერთეულის პარამეტრები. |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite-ის ხაზის ერთეულის ინსტანცია. |
| $wc_product | `\WC_Product` | WooCommerce პროდუქტი. |

### ვერსიიდან

- 2.0.0
### წყარო

განსაზღვრულია [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662)-ში, 662-ე ხაზზე


## აბრუნებს
შეცვლილ ხაზის ერთეულის პარამეტრებს.
