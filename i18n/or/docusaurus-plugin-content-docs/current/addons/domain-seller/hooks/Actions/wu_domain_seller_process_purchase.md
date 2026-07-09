---
id: wu_domain_seller_process_purchase
title: କାର୍ଯ୍ୟ - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# କାର୍ଯ୍ୟ: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

checkout ସମାପ୍ତ ହେବା ପରେ domain କିଣା ପ୍ରକ୍ରିୟାକରଣ ହେଉଥିବାବେଳେ ଚାଲୁ ହୁଏ।

## ପାରାମିଟର {#parameters}

| ନାମ | ପ୍ରକାର | ବର୍ଣ୍ଣନା |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | payment object। |
| $checkout_data | `array&lt;string,mixed&gt;` | signup form ରୁ ସମ୍ପୂର୍ଣ୍ଣ checkout data। |

### ଯେହେତୁ {#since}

- 2.0.0
### ଉତ୍ସ {#source}

[`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) ରେ 246 ନମ୍ବର ଲାଇନରେ ପରିଭାଷିତ।
