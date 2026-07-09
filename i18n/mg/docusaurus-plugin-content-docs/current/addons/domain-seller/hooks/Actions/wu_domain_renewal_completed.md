---
id: wu_domain_renewal_completed
title: Hetsika - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Mipoitra rehefa nohavaozina soa aman-tsara ny domain iray.

## Masontsivana

| Anarana | Karazana | Famaritana |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ny payment izay niteraka ny fanavaozana. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata momba ny fanavaozana (domain_name, years, customer_id, sns.). |
| $result | `array&lt;string,mixed&gt;` | Array vokatra manta naverin’ny registrar, ahitana ny expiry_date vaovao. |

### Hatramin'ny

- 2.0.0
### Loharano

Voafaritra ao amin'ny [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) amin'ny andalana 594
