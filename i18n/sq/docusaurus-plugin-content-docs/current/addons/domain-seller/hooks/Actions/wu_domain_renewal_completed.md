---
id: wu_domain_renewal_completed
title: Veprim - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Niset pasi një domain është rinovuar me sukses.

## Parametrat {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Pagesa që shkaktoi rinovimin. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata të rinovimit (domain_name, vite, customer_id, etj.). |
| $result | `array&lt;string,mixed&gt;` | Vargu i papërpunuar i rezultatit i kthyer nga registrari, duke përfshirë expiry_date të re. |

### Që nga {#since}

- 2.0.0
### Burimi {#source}

Përcaktuar në [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) në rreshtin 594
