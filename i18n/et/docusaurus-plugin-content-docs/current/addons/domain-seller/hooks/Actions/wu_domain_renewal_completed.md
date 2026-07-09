---
id: wu_domain_renewal_completed
title: Toiming - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Tegevus: wu_domain_renewal_completed

Käivitatakse pärast seda, kui domeen on edukalt uuendatud.

## Parameetrid

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Makse, mis käivitas uuendamise. |
| $renewal_data | `array&lt;string,mixed&gt;` | Uuendamise metaandmed (domain_name, years, customer_id jne). |
| $result | `array&lt;string,mixed&gt;` | Registripidaja tagastatud töötlemata tulemuste massiiv, sealhulgas uus expiry_date. |

### Alates

- 2.0.0
### Allikas

Määratletud failis [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) real 594
