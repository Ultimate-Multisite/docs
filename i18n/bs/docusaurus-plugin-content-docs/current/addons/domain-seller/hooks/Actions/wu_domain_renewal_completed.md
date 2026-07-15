---
id: wu_domain_renewal_completed
title: Akcija - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Pokreće se nakon uspješnog obnavljanja domene.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Plaćanje koje je pokrenulo obnavljanje. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metapodaci o obnavljanju (ime domene, godine, ID klijenta, itd.). |
| $result | `array&lt;string,mixed&gt;` | Sirovi niz rezultata koji je vratio registrator, uključujući novi `expiry_date`. |

### Since {#since}

- 2.0.0
### Source {#source}

Definisano u [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) na liniji 594
