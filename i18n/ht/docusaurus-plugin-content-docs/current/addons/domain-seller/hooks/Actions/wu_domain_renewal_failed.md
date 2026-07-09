---
id: wu_domain_renewal_failed
title: Aksyon - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Deklanche apre yon tantativ renouvèlman domèn echwe.

## Paramèt

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Peman ki te deklanche renouvèlman an. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata renouvèlman (domain_name, years, elatriye). |
| $error_message | `string` | Mesaj erè moun ka li ki soti nan rejistrè a. |

### Depi

- 2.0.0
### Sous

Defini nan [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) nan liy 630
