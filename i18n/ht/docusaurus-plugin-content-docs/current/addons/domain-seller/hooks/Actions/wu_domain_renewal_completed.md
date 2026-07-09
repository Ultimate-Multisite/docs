---
id: wu_domain_renewal_completed
title: Aksyon - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Aksyon: wu_domain_renewal_completed

Deklanche apre yon domèn fin renouvle avèk siksè.

## Paramèt

| Non | Tip | Deskripsyon |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Peman ki te deklanche renouvèlman an. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata renouvèlman (domain_name, years, customer_id, elatriye). |
| $result | `array&lt;string,mixed&gt;` | Tablo rezilta brit registrar la retounen, ki gen ladan nouvo expiry_date la. |

### Depi

- 2.0.0
### Sous

Defini nan [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) nan liy 594
