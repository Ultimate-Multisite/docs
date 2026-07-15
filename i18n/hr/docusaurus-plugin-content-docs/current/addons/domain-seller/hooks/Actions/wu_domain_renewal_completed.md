---
id: wu_domain_renewal_completed
title: Radnja - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Akcija: wu_domain_renewal_completed

Pokreće se nakon što je domena uspješno obnovljena.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Plaćanje koje je pokrenulo obnovu. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metapodaci obnove (domain_name, years, customer_id itd.). |
| $result | `array&lt;string,mixed&gt;` | Sirovi niz rezultata koji je vratio registrar, uključujući novi expiry_date. |

### Od {#since}

- 2.0.0
### Izvor {#source}

Definirano u [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) u retku 594
