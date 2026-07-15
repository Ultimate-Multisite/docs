---
id: wu_woocommerce_line_item_params
title: ଫିଲ୍ଟର - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# ଫିଲ୍ଟର: wu_woocommerce_line_item_params

WooCommerce Cart ରେ ଲାଇନ୍ ଆଇଟମ୍ ତିଆରି ପାଇଁ ବ୍ୟବହୃତ ପାରାମିଟରଗୁଡ଼ିକୁ ଫିଲ୍ଟର କରେ, ଗ୍ରାହକଙ୍କୁ WooCommerce ଚେକଆଉଟ୍‌କୁ ପୁନଃନିର୍ଦ୍ଦେଶ କରିବା ପୂର୍ବରୁ।

## ପାରାମିଟର {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $line_item_params | `array` | କାର୍ଟ ଲାଇନ୍ ଆଇଟମ୍ ପାରାମିଟରଗୁଡ଼ିକ। |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | Ultimate Multisite ଲାଇନ୍ ଆଇଟମ୍ ଇନ୍‌ଷ୍ଟାନ୍ସ। |
| $wc_product | `\WC_Product` | WooCommerce ଉତ୍ପାଦ। |

### ଯେଉଁଠାରୁ {#since}

- 2.0.0
### ଉତ୍ସ {#source}

[`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) ରେ 662 ନମ୍ବର ଲାଇନ୍‌ରେ ପରିଭାଷିତ


## ଫେରାଇଥାଏ {#returns}
ପରିବର୍ତ୍ତିତ ଲାଇନ୍ ଆଇଟମ୍ ପାରାମିଟରଗୁଡ଼ିକ।
