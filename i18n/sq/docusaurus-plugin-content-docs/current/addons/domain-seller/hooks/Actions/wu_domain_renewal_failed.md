---
id: wu_domain_renewal_failed
title: Veprim - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Aktivizohet pasi një përpjekje për rinovim domeni dështon.

## Parametrat {#parameters}

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Pagesa që shkaktoi rinovimin. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata të rinovimit (domain_name, years, etj.). |
| $error_message | `string` | Mesazh gabimi i lexueshëm nga njeriu nga regjistruesi. |

### Që nga {#since}

- 2.0.0
### Burimi {#source}

Përcaktuar në [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) në rreshtin 630
