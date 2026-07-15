---
id: wu_domain_renewal_completed
title: Gweithred - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Yn tanio ar ôl i barth gael ei adnewyddu'n llwyddiannus.

## Paramedrau {#parameters}

| Enw | Math | Disgrifiad |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Y taliad a sbardunodd yr adnewyddu. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata adnewyddu (domain_name, years, customer_id, ac ati). |
| $result | `array&lt;string,mixed&gt;` | Arae canlyniad crai a ddychwelwyd gan y cofrestrydd, gan gynnwys expiry_date newydd. |

### Ers {#since}

- 2.0.0
### Ffynhonnell {#source}

Wedi'i ddiffinio yn [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) ar linell 594
