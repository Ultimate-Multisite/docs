---
id: wu_domain_renewal_failed
title: Գործողություն - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Գործողություն՝ wu_domain_renewal_failed

Գործարկվում է, երբ domain-ի երկարաձգման փորձը ձախողվում է։

## Պարամետրեր

| Անուն | Տեսակ | Նկարագրություն |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Վճարումը, որը գործարկեց երկարաձգումը։ |
| $renewal_data | `array&lt;string,mixed&gt;` | Երկարաձգման մետատվյալներ (domain_name, years և այլն)։ |
| $error_message | `string` | Գրանցողից ստացված՝ մարդու համար ընթեռնելի սխալի հաղորդագրություն։ |

### Սկսած

- 2.0.0
### Աղբյուր

Սահմանված է [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630)-ում՝ 630-րդ տողում
