---
id: wu_domain_renewal_failed
title: Azzjoni - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Azzjoni: wu_domain_renewal_failed

Jitqabbad wara li tentattiv ta’ tiġdid ta’ domain ifalli.

## Parametri

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Il-ħlas li qanqal it-tiġdid. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata tat-tiġdid (domain_name, years, eċċ.). |
| $error_message | `string` | Messaġġ ta’ żball li jinqara mill-bniedem mir-registrar. |

### Minn

- 2.0.0
### Sors

Definit f’[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) fil-linja 630
