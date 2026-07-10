---
id: wu_domain_renewal_failed
title: Darbība - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Darbība: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Tiek palaista pēc tam, kad domēna atjaunošanas mēģinājums neizdodas.

## Parametri {#parameters}

| Nosaukums | Tips | Apraksts |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Maksājums, kas izraisīja atjaunošanu. |
| $renewal_data | `array&lt;string,mixed&gt;` | Atjaunošanas metadati (domain_name, gadi utt.). |
| $error_message | `string` | Cilvēkam saprotams kļūdas ziņojums no reģistratora. |

### Kopš {#since}

- 2.0.0
### Avots {#source}

Definēts [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) 630. rindā
