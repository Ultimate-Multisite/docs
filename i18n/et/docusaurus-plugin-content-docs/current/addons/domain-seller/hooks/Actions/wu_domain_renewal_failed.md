---
id: wu_domain_renewal_failed
title: Tegevus - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Toiming: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Käivitatakse pärast domeeni uuendamise katse ebaõnnestumist.

## Parameetrid {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Makse, mis käivitas uuendamise. |
| $renewal_data | `array&lt;string,mixed&gt;` | Uuendamise metaandmed (domain_name, years jne). |
| $error_message | `string` | Inimloetav veateade registraatorilt. |

### Alates {#since}

- 2.0.0
### Allikas {#source}

Määratletud failis [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) real 630
