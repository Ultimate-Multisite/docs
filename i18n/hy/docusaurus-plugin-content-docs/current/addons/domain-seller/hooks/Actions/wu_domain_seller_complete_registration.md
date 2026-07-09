---
id: wu_domain_seller_complete_registration
title: Գործողություն - wu_domain_seller_complete_registration
sidebar_label: wu_domain_seller_complete_registration
_i18n_hash: 0bd00822989aa5b0dbda498ef5e69848
---
# Գործողություն: wu_domain_seller_complete_registration {#action-wudomainsellercompleteregistration}

Գործարկվում է, երբ վճարումն անցնում է այնպիսի կարգավիճակի, որը պետք է գործարկի տիրույթի գրանցումը։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Վճարման օբյեկտը։ |
| $old_status | `string` | Վճարման նախորդ կարգավիճակը՝ անցումից առաջ։ |

### Սկսած {#since}

- 2.0.0
### Աղբյուր {#source}

Սահմանված է [`inc/class-domain-seller.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-seller.php#L266)-ում՝ 266-րդ տողում
