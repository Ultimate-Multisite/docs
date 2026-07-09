---
id: wu_domain_renewal_failed
title: Handling - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Udløses, efter et forsøg på domænefornyelse mislykkes.

## Parametre

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Betalingen, der udløste fornyelsen. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata for fornyelse (domain_name, years osv.). |
| $error_message | `string` | Menneskeligt læsbar fejlmeddelelse fra registratoren. |

### Siden

- 2.0.0
### Kilde

Defineret i [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) på linje 630
