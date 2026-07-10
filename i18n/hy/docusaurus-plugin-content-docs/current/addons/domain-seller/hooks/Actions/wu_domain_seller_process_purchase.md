---
id: wu_domain_seller_process_purchase
title: Գործողություն - wu_domain_seller_process_purchase
sidebar_label: wu_domain_seller_process_purchase
_i18n_hash: af00bd289685ee01ed7a15275fa410c6
---
# Գործողություն՝ wu_domain_seller_process_purchase {#action-wudomainsellerprocesspurchase}

Գործարկվում է, երբ checkout-ի ավարտից հետո դոմենի գնումը մշակվում է։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Վճարման օբյեկտը։ |
| $checkout_data | `array&lt;string,mixed&gt;` | Գրանցման ձևից ամբողջական checkout-ի տվյալները։ |

### Սկսած {#since}

- 2.0.0
### Աղբյուր {#source}

Սահմանված է [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L246)-ում՝ 246-րդ տողում
