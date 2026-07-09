---
id: wu_domain_renewal_failed
title: Acțiune - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Se declanșează după ce o încercare de reînnoire a domeniului eșuează.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Plățile care au declanșat reînnoirea. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadatele de reînnoire (numele domeniului, anii, etc.). |
| $error_message | `string` | Mesajul de eroare ușor de citit de la registrar. |

### Since {#since}

- 2.0.0
### Source {#source}

Definit în [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) la linia 630
