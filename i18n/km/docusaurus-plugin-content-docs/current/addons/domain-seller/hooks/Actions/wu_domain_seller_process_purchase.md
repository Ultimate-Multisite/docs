---
id: wu_domain_seller_process_purchase
title: សកម្មភាព - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# សកម្មភាព៖ wu_domain_seller_process_purchase

ដំណើរការ នៅពេលការទិញដែនកំពុងត្រូវបានដំណើរការ បន្ទាប់ពីការបញ្ចប់ checkout។

## ប៉ារ៉ាម៉ែត្រ {#parameters}

| ឈ្មោះ | ប្រភេទ | ការពិពណ៌នា |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | វត្ថុការទូទាត់។ |
| $checkout_data | `array&lt;string,mixed&gt;` | ទិន្នន័យ checkout ពេញលេញពីទម្រង់ចុះឈ្មោះ។ |

### ចាប់ពី {#since}

- 2.0.0
### ប្រភព {#source}

បានកំណត់នៅក្នុង [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) ត្រង់បន្ទាត់ 246
