---
id: wu_domain_renewal_failed
title: Akcija - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Pokreće se nakon što pokušaj obnove domena ne uspije.

## Parametri {#parameters}

| Name | Type | Opis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Plaćanje koje je pokrenulo obnovu. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metapodaci o obnovi (ime domena, godine, itd.). |
| $error_message | `string` | Lako čitljiva poruka o grešci od registra. |

### Od verzije {#since}

- 2.0.0
### Izvor {#source}

Definisano u [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) na liniji 630
