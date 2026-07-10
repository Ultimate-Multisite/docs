---
id: wu_domain_renewal_failed
title: Gníomh - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Spreagtar é tar éis d’iarracht athnuachana fearainn teip.

## Paraiméadair {#parameters}

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | An íocaíocht a spreag an athnuachan. |
| $renewal_data | `array&lt;string,mixed&gt;` | Meiteashonraí athnuachana (domain_name, years, srl.). |
| $error_message | `string` | Teachtaireacht earráide inléite ag duine ón gcláraitheoir. |

### Ó shin {#since}

- 2.0.0
### Foinse {#source}

Sainithe in [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) ag líne 630
