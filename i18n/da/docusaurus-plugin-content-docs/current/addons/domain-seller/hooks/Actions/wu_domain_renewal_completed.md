---
id: wu_domain_renewal_completed
title: Handling - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Udløses efter et domæne er blevet fornyet korrekt.

## Parametre

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Betalingen, der udløste fornyelsen. |
| $renewal_data | `array&lt;string,mixed&gt;` | Fornyelsesmetadata (domain_name, years, customer_id osv.). |
| $result | `array&lt;string,mixed&gt;` | Rå result-array returneret af registratoren, inklusive ny expiry_date. |

### Siden

- 2.0.0
### Kilde

Defineret i [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) på linje 594
