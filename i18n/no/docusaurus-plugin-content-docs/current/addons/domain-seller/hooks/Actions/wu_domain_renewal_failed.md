---
id: wu_domain_renewal_failed
title: Handling - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Kjøres når et forsøk på domenerfornyelse mislykkes.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Betalingen som utløste fornyelsen. |
| $renewal_data | `array<string,mixed>` | Metadata for fornyelsen (dom_name, years, osv.). |
| $error_message | `string` | En lesbar feilmelding fra registeret. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) på linje 630
