---
id: wu_domain_renewal_failed
title: Kev nqis tes - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Khiav tom qab ib qho kev sim txuas sijhawm domain ua tsis tiav.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Qhov payment uas ua rau muaj kev txuas sijhawm. |
| $renewal_data | `array&lt;string,mixed&gt;` | Renewal metadata (domain_name, years, thiab lwm yam). |
| $error_message | `string` | Lus qhia yuam kev uas tib neeg nyeem tau los ntawm registrar. |

### Txij li {#since}

- 2.0.0
### Qhov chaw {#source}

Txhais hauv [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ntawm kab 630
