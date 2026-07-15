---
id: wu_domain_renewal_failed
title: Aksi - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Kajadian sanggeus usaha pembaruan domain gagal.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Pamayaran anu micu pembaruan. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata pembaruan (domain_name, taun, jsb.). |
| $error_message | `string` | Talatah kasalahan anu kaharti ku manusa ti registrar. |

### Ti saprak {#since}

- 2.0.0
### Sumber {#source}

Ditetepkeun dina [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) dina baris 630
