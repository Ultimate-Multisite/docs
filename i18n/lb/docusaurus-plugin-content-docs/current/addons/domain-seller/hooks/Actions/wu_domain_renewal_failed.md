---
id: wu_domain_renewal_failed
title: Aktioun - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Gëtt ausgeléist, nodeems e Versuch fir eng Domain ze erneieren feelgeschloen ass.

## Parameteren {#parameters}

| Numm | Typ | Beschreiwung |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | D'Bezuelung, déi d'Erneierung ausgeléist huet. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadate vun der Erneierung (domain_name, years, asw.). |
| $error_message | `string` | Mënschlech liesbar Feelermeldung vum Registrar. |

### Zanter {#since}

- 2.0.0
### Quell {#source}

Definéiert an [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) an der Linn 630
