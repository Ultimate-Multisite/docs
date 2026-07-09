---
id: wu_domain_renewal_failed
title: Çalakî - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Piştî ku hewldana nûkirina domain têk diçe, tê şewitandin.

## Parametre {#parameters}

| Nav | Cure | Danasîn |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ew payment-a ku nûkirinê dest pê kir. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata ya nûkirinê (domain_name, sal, hwd.). |
| $error_message | `string` | Peyama çewtiyê ya ji registrar ku mirov dikare bixwîne. |

### Ji {#since}

- 2.0.0
### Çavkanî {#source}

Di [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) de li rêza 630 hatiye pênasekirin.
