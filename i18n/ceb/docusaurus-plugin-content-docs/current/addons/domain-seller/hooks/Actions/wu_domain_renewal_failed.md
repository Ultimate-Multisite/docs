---
id: wu_domain_renewal_failed
title: Aksyon - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Aksyon: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Mo-andar human mapakyas ang pagsulay sa pag-renew sa domain.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ang bayad nga maoy nagpahinabo sa pag-renew. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata sa pag-renew (domain_name, mga tuig, ug uban pa). |
| $error_message | `string` | Human-readable nga mensahe sa sayop gikan sa registrar. |

### Sukad {#since}

- 2.0.0
### Tinubdan {#source}

Gihubit sa [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) sa linya 630
