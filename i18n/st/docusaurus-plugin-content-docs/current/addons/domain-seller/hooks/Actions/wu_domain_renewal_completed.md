---
id: wu_domain_renewal_completed
title: Ketso - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Ketso: wu_domain_renewal_completed

E sebetsa ka mor'a hore domain e nchafalitsoe ka katleho.

## Diparamethara

| Lebitso | Mofuta | Tlhaloso |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Tefo e qalileng nchafatso. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata ya nchafatso (domain_name, years, customer_id, jj.). |
| $result | `array&lt;string,mixed&gt;` | Array ya sephetho se tala e kgutlisitsweng ke registrar ho kenyeletswa expiry_date e ntjha. |

### Ho tloha ka

- 2.0.0
### Mohlodi

E hlalositswe ho [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) moleng wa 594
