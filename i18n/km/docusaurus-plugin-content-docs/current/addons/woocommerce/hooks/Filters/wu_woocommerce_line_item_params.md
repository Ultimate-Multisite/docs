---
id: wu_woocommerce_line_item_params
title: តម្រង - wu_woocommerce_line_item_params
sidebar_label: wu_woocommerce_line_item_params
_i18n_hash: e73b9172e21ffc9367dbea9f74dadb63
---
# តម្រង: wu_woocommerce_line_item_params {#filter-wuwoocommercelineitemparams}

តម្រងប៉ារ៉ាម៉ែត្រដែលប្រើដើម្បីបង្កើតធាតុបន្ទាត់នៅលើកន្ត្រក WooCommerce មុនពេលបញ្ជូនអតិថិជនទៅការទូទាត់ប្រាក់ WooCommerce។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $line_item_params | `array` | ប៉ារ៉ាម៉ែត្រធាតុបន្ទាត់ក្នុងកន្ត្រក។ |
| $wu_line_item | `\WP_Ultimo\Checkout\Line_Item` | អ៊ីនស្តង់ធាតុបន្ទាត់ Ultimate Multisite។ |
| $wc_product | `\WC_Product` | ផលិតផល WooCommerce។ |

### ចាប់ពី {#since}

- 2.0.0
### ប្រភព {#source}

បានកំណត់នៅក្នុង [`inc/gateways/class-woocommerce-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/gateways/class-woocommerce-gateway.php#L662) ត្រង់បន្ទាត់ 662


## ត្រឡប់ {#returns}
ប៉ារ៉ាម៉ែត្រធាតុបន្ទាត់ដែលបានកែប្រែ។
