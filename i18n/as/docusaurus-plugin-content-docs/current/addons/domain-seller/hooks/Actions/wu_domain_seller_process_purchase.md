---
id: wu_domain_seller_process_purchase
title: কাৰ্য - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Action: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

চেকাউট সম্পন্ন হোৱাৰ পিছত ডোমেইন ক্ৰয় প্ৰক্ৰিয়াকৰণ কৰা হৈছে, তেতিয়া এই অ্যাকশনটো কলিছে।

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | পেমেন্ট বস্তু (object) টো। |
| $checkout_data | `array&lt;string,mixed&gt;` | সাইনআপ ফৰ্মৰ পৰা পোৱা সম্পূৰ্ণ চেকাউট তথ্য। |

### Since {#since}

- 2.0.0
### Source {#source}

Defined in [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) at line 246
