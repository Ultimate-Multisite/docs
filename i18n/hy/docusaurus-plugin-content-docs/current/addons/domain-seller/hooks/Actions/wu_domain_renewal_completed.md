---
id: wu_domain_renewal_completed
title: Գործողություն - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Գործողություն: wu_domain_renewal_completed

Գործարկվում է, երբ տիրույթը հաջողությամբ երկարաձգվել է։

## Պարամետրեր {#parameters}

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Վճարումը, որը գործարկել է երկարաձգումը։ |
| $renewal_data | `array&lt;string,mixed&gt;` | Երկարաձգման մետատվյալներ (domain_name, years, customer_id և այլն)։ |
| $result | `array&lt;string,mixed&gt;` | Գրանցողի կողմից վերադարձված չմշակված արդյունքների զանգվածը՝ ներառյալ նոր expiry_date-ը։ |

### Սկսած {#since}

- 2.0.0
### Աղբյուր {#source}

Սահմանված է [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) ֆայլում՝ 594-րդ տողում։
