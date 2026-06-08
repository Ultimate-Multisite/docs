---
id: wu_domain_renewal_failed
title: Action - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Ito ay tumatakbo pagkatapos mabigo ang pagtatangka na i-renew ang isang domain.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ang bayad na nag-trigger ng pag-renew. |
| $renewal_data | `array<string,mixed>` | Metadata ng pag-renew (domain_name, years, atbp.). |
| $error_message | `string` | Madaling basahin na mensahe ng error mula sa registrar. |

### Since

- 2.0.0
### Source

Tinukoy sa [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) sa linya 630
