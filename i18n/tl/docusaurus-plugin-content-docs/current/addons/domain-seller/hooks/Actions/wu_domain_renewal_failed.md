---
id: wu_domain_renewal_failed
title: Aksyon - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Gumagana pagkatapos mabigo ang pagtatangkang pag-renew ng domain.

## Mga Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ang bayad na nag-trigger ng renewal. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata ng renewal (domain_name, mga taon, atbp.). |
| $error_message | `string` | Nababasa-ng-taong mensahe ng error mula sa registrar. |

### Mula Noong {#since}

- 2.0.0
### Pinagmulan {#source}

Tinukoy sa [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) sa linya 630
