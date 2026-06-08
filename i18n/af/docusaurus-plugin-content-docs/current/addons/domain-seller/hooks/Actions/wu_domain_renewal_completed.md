---
id: wu_domain_renewal_completed
title: Action - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Aksie: wu_domain_renewal_completed

Word geaktiveer nadat 'n domein suksesvol hernuik is.

## Parameters

| Naam | Tipe | Beskrywing |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Die betaling wat die hernuwing geplaiseer het. |
| $renewal_data | `array&lt;string,mixed&gt;` | Hernuwing-metadata (domain_name, years, customer_id, ens.). |
| $result | `array&lt;string,mixed&gt;` | Die rauwe resultaat-array wat deur die registerant teruggegee word, insluitend die nuwe `expiry_date`. |

### Sedert

- 2.0.0
### Bron

Benoem in [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) op lyn 594
