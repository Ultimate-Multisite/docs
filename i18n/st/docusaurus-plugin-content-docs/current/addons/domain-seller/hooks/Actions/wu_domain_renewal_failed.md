---
id: wu_domain_renewal_failed
title: Ketso - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Ketso: wu_domain_renewal_failed

E sebetsa ka mor'a hore teko ea ho nchafatsa domain e hlolehe.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Tefo e bakileng nchafatso. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata ea nchafatso (domain_name, years, joalo-joalo). |
| $error_message | `string` | Molaetsa oa phoso o baloang ke motho o tsoang ho registrar. |

### Ho tloha ka

- 2.0.0
### Mohloli

E hlalositsoe ho [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) moleng oa 630
