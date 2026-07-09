---
id: wu_domain_renewal_failed
title: Chiito - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Inotanga mushure mekunge kuedza kuvandudza domain kwakundikana.

## Maparameter

| Zita | Type | Tsananguro |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Muripo wakakonzera kuvandudzwa. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata yekuvandudza (domain_name, makore, nezvimwewo). |
| $error_message | `string` | Meseji yekukanganisa inoverengwa nemunhu kubva ku registrar. |

### Kubva

- 2.0.0
### Kwakabva

Yakatsanangurwa mu [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) pamutsara 630
