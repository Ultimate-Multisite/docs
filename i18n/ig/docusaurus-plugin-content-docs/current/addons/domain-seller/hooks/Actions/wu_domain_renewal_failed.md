---
id: wu_domain_renewal_failed
title: Omume - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Na-arụ ọrụ mgbe mgbalị imegharị domain dara.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ụgwọ nke kpalitere mmegharị ahụ. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata mmegharị (domain_name, afọ, wdg.). |
| $error_message | `string` | Ozi njehie mmadụ nwere ike ịgụ sitere n’aka registrar. |

### Kemgbe {#since}

- 2.0.0
### Isi mmalite {#source}

Akọwara ya na [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) na ahịrị 630
