---
id: wu_domain_renewal_failed
title: Toiminto - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Käynnistyy, kun domainin uusimisyritys epäonnistuu.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Maksu, joka käynnisti uusimisen. |
| $renewal_data | `array&lt;string,mixed&gt;` | Uusimisen metadata (domain_name, vuodet jne.). |
| $error_message | `string` | Ihmisluettava virheviesti rekisterinpitäjältä. |

### Alkaen versiosta {#since}

- 2.0.0
### Lähde {#source}

Määritelty tiedostossa [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) rivillä 630
