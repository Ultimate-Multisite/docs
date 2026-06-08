---
id: wu_add_product_setup_fee_line_item
title: Filter - wu_add_product_setup_fee_line_item
sidebar_label: wu_add_product_setup_fee_line_item
_i18n_hash: 7175266054e611752e49e762b103e858
---
# Filter: wu_add_product_setup_fee_line_item

டெவலப்பர்கள் செட்அப் கட்டணத்தின் (setup fee) வரிசைப் பொருளில் (line item) மாற்றங்களைச் செய்ய அனுமதிக்கிறது.

## அளவுருக்கள் (Parameters)

| Name | Type | விளக்கம் |
|------|------|-------------|
| $setup_fee_line_item | `array` | செட்அப் கட்டண வரிசைப் பொருளுக்கான அளவுருக்கள். |
| $product | `\WP_Ultimo\Models\Product` | செட்அப் கட்டணத்துடன் தொடர்புடைய தயாரிப்பு (product). |
| $cart | `\WP_Ultimo\Checkout\Cart` | கார்ட் ஆப்ஜெக்ட் (cart object). |

### எப்போது இருந்து (Since)

- 2.1
### மூலம் (Source)

இது [`inc/checkout/class-cart.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-cart.php#L1790) என்ற கோப்பில் 1790 வரியில் வரையறுக்கப்பட்டுள்ளது.


## திரும்ப அளிப்பது (Returns)
