---
id: wu_domain_renewal_completed
title: Aksyon - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Aksyon: wu_domain_renewal_completed

Nati-trigger matapos matagumpay na ma-renew ang isang domain.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ang bayad na nag-trigger ng renewal. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata ng renewal (domain_name, years, customer_id, atbp.). |
| $result | `array&lt;string,mixed&gt;` | Raw na array ng resulta na ibinalik ng registrar kabilang ang bagong expiry_date. |

### Mula Noong {#since}

- 2.0.0
### Pinagmulan {#source}

Tinukoy sa [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) sa linya 594
