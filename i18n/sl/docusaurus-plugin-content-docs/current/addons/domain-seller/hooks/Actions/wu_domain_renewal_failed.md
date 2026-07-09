---
id: wu_domain_renewal_failed
title: Dejanje - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Dejanje: wu_domain_renewal_failed

Sproži se, ko poskus podaljšanja domene ne uspe.

## Parametri

| Ime | Vrsta | Opis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Plačilo, ki je sprožilo podaljšanje. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metapodatki podaljšanja (domain_name, leta itd.). |
| $error_message | `string` | Človeku berljivo sporočilo o napaki od registrarja. |

### Od različice

- 2.0.0
### Vir

Določeno v [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) v vrstici 630
