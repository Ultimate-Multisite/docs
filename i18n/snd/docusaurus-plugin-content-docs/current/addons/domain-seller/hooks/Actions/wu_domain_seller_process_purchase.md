---
id: wu_domain_seller_process_purchase
title: عمل - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase

تڏهن هلندو آهي جڏهن checkout مڪمل ٿيڻ کان پوءِ domain خريداري تي عمل ٿي رهيو هجي.

## پيرا ميٽر {#parameters}

| نالو | قسم | وضاحت |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | ادائيگيءَ جو آبجيڪٽ. |
| $checkout_data | `array&lt;string,mixed&gt;` | signup فارم مان مڪمل checkout ڊيٽا. |

### کان وٺي {#since}

- 2.0.0
### ذريعو {#source}

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) ۾ 246هين لائين تي بيان ٿيل آهي.
