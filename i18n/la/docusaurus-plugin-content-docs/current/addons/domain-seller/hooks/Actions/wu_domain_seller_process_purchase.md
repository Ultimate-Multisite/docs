---
id: wu_domain_seller_process_purchase
title: Actio - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Actio: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

Excutitur cum emptio dominii post completionem checkout tractatur.

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Obiectum solutionis. |
| $checkout_data | `array&lt;string,mixed&gt;` | Plena data checkout ex forma inscriptionis. |

### Ab {#since}

- 2.0.0
### Fons {#source}

Definitum in [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) ad lineam 246
