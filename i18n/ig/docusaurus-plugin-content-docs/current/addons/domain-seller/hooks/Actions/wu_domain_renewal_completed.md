---
id: wu_domain_renewal_completed
title: Omume - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Omume: wu_domain_renewal_completed

Na-eme mgbe emegharịrị domain nke ọma.

## Parameters {#parameters}

| Aha | Ụdị | Nkọwa |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Payment kpalitere mmeghari. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata mmeghari (domain_name, years, customer_id, wdg.). |
| $result | `array&lt;string,mixed&gt;` | Array nsonaazụ raw nke registrar weghachiri, gụnyere expiry_date ọhụrụ. |

### Kemgbe {#since}

- 2.0.0
### Isi mmalite {#source}

A kọwara ya na [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) n’ahịrị 594
