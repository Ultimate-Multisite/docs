---
id: wu_domain_renewal_completed
title: Dejanje - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Dejanje: wu_domain_renewal_completed

Sproži se po uspešni obnovitvi domene.

## Parametri

| Ime | Vrsta | Opis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Plačilo, ki je sprožilo obnovitev. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metapodatki obnovitve (domain_name, years, customer_id itd.). |
| $result | `array&lt;string,mixed&gt;` | Surova tabela rezultatov, ki jo vrne registrar, vključno z novim expiry_date. |

### Od različice

- 2.0.0
### Vir

Določeno v [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) v vrstici 594
