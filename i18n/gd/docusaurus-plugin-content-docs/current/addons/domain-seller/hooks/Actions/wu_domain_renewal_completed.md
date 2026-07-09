---
id: wu_domain_renewal_completed
title: Gnìomh - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Gnìomh: wu_domain_renewal_completed

Thèid a chur an gnìomh an dèidh do àrainn a bhith air ùrachadh gu soirbheachail.

## Paramadairean

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Am pàigheadh a bhrosnaich an t-ùrachadh. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata ùrachaidh (domain_name, years, customer_id, msaa.). |
| $result | `array&lt;string,mixed&gt;` | Eagar toradh amh a thilleadh leis an registrar, a’ gabhail a-steach expiry_date ùr. |

### Bhon uair

- 2.0.0
### Tùs

Air a mhìneachadh ann an [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) aig loidhne 594
