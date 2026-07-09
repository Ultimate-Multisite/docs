---
id: wu_domain_seller_process_purchase
title: کړنه - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# عمل: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

هغه مهال چلېږي کله چې د checkout بشپړېدو وروسته د domain پېرودنه پروسس کېږي.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | د payment څیز. |
| $checkout_data | `array&lt;string,mixed&gt;` | له signup فورمې څخه بشپړ checkout معلومات. |

### له نسخې راهیسې {#since}

- 2.0.0
### سرچینه {#source}

په [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) کې په 246 کرښه تعریف شوی.
