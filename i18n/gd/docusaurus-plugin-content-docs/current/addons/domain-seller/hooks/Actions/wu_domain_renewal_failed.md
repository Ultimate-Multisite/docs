---
id: wu_domain_renewal_failed
title: Gnìomh - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Gnìomh: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Thèid a chur an gnìomh às dèidh do dh’oidhirp air ùrachadh àrainn fàiligeadh.

## Paramadairean {#parameters}

| Ainm | Seòrsa | Tuairisgeul |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Am pàigheadh a bhrosnaich an t-ùrachadh. |
| $renewal_data | `array&lt;string,mixed&gt;` | Meata-dàta ùrachaidh (domain_name, bliadhnaichean, msaa.). |
| $error_message | `string` | Teachdaireachd mearachd a ghabhas leughadh le duine bhon registrar. |

### Bho {#since}

- 2.0.0
### Tùs {#source}

Air a mhìneachadh ann an [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) aig loidhne 630
