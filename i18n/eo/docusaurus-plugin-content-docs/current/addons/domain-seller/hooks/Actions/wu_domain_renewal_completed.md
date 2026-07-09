---
id: wu_domain_renewal_completed
title: Ago - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Ago: wu_domain_renewal_completed

Ekfunkcias post kiam domajno estas sukcese renovigita.

## Parametroj

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | La pago kiu ekigis la renovigon. |
| $renewal_data | `array&lt;string,mixed&gt;` | Renovigaj metadatumoj (domain_name, years, customer_id, ktp.). |
| $result | `array&lt;string,mixed&gt;` | Kruda rezultotabelo redonita de la registristo, inkluzive de nova expiry_date. |

### Ekde

- 2.0.0
### Fonto

Difinita en [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) ĉe linio 594
