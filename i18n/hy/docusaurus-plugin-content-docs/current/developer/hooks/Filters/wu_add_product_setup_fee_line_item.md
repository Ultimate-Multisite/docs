---
id: wu_add_product_setup_fee_line_item
title: Զտիչ - wu_add_product_setup_fee_line_item
sidebar_label: wu_add_product_setup_fee_line_item
_i18n_hash: 7175266054e611752e49e762b103e858
---
# Զտիչ: wu_add_product_setup_fee_line_item

Թույլ է տալիս մշակողներին փոփոխություններ կատարել կարգավորման վճարի տողի տարրում։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $setup_fee_line_item | `array` | Կարգավորման վճարի տողի տարրի պարամետրերը։ |
| $product | `\WP_Ultimo\Models\Product` | Կարգավորման վճարին կապված արտադրանքը։ |
| $cart | `\WP_Ultimo\Checkout\Cart` | Զամբյուղի օբյեկտը։ |

### Սկսած {#since}

- 2.1
### Աղբյուր {#source}

Սահմանված է [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1790) ֆայլում՝ 1790-րդ տողում


## Վերադարձնում է {#returns}
