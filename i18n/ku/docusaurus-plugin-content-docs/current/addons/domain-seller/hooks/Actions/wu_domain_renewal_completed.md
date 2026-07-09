---
id: wu_domain_renewal_completed
title: Çalakî - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Çalakî: wu_domain_renewal_completed

Piştî ku domainek bi serkeftî hate nûkirin, tê şewitandin.

## Parametre

| Nav | Cure | Rave |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ew payment a ku nûkirinê da destpêkirin. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata ya nûkirinê (domain_name, years, customer_id, hwd.). |
| $result | `array&lt;string,mixed&gt;` | Array ya encama xav a ku ji aliyê registrar ve hat vegerandin, tevî expiry_date ya nû. |

### Ji guhertoya

- 2.0.0
### Çavkanî

Di [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) de li rêza 594 hat diyarkirin.
