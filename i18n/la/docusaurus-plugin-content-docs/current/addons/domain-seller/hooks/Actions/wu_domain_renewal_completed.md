---
id: wu_domain_renewal_completed
title: Actio - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Actio: wu_domain_renewal_completed

Excitatur postquam dominium prospere renovatum est.

## Parametra

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Solutio quae renovationem excitavit. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata renovationis (domain_name, years, customer_id, etc.). |
| $result | `array&lt;string,mixed&gt;` | Rudis ordinatio resultati a registro reddita, novam expiry_date includens. |

### Ab

- 2.0.0
### Fons

Definitum in [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) ad lineam 594
