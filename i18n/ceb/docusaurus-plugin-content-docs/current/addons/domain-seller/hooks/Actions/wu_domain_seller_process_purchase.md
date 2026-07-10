---
id: wu_domain_seller_process_purchase
title: Aksyon - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Aksyon: wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

Moandar kung ang pagpalit og domain giproseso human mahuman ang checkout.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ang payment object. |
| $checkout_data | `array&lt;string,mixed&gt;` | Kompletong datos sa checkout gikan sa porma sa signup. |

### Sukad {#since}

- 2.0.0
### Tinubdan {#source}

Gidepina sa [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246) sa linya 246
