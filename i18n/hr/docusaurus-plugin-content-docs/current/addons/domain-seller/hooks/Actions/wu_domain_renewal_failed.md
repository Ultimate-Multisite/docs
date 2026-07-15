---
id: wu_domain_renewal_failed
title: Radnja - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Radnja: wu_domain_renewal_failed

Pokreće se nakon neuspjelog pokušaja obnove domene.

## Parametri {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Plaćanje koje je pokrenulo obnovu. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metapodaci obnove (domain_name, years itd.). |
| $error_message | `string` | Čitljiva poruka o pogrešci od registrara. |

### Od {#since}

- 2.0.0
### Izvor {#source}

Definirano u [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) u retku 630
