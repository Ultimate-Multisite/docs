---
id: wu_domain_renewal_completed
title: Aksyon - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Mosiga human nga malampusong na-renew ang usa ka domain.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ang payment nga nakapahinabo sa renewal. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata sa renewal (domain_name, years, customer_id, ug uban pa). |
| $result | `array&lt;string,mixed&gt;` | Hilaw nga result array nga gibalik sa registrar apil ang bag-ong expiry_date. |

### Sukad {#since}

- 2.0.0
### Tinubdan {#source}

Gihubit sa [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) sa linya 594
