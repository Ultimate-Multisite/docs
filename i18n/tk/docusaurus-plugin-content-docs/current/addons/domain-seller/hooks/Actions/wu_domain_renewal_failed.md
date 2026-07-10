---
id: wu_domain_renewal_failed
title: Hereket - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Hereket: wu_domain_renewal_failed {#action-wudomainrenewalfailed}

Domeniň täzeleniş synanyşygy şowsuz bolandan soň işledilýär.

## Parametrler {#parameters}

| Ady | Görnüşi | Düşündiriş |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Täzelenişi döreden töleg. |
| $renewal_data | `array&lt;string,mixed&gt;` | Täzeleniş metadata-sy (domain_name, years we ş.m.). |
| $error_message | `string` | Registratordan gelen adama düşnükli ýalňyşlyk habary. |

### Şondan bäri {#since}

- 2.0.0
### Çeşme {#source}

[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) içinde 630-njy setirde kesgitlenen.
