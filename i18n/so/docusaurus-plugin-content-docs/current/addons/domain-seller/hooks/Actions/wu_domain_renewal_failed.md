---
id: wu_domain_renewal_failed
title: Tallaabo - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Waxay dhacdaa ka dib marka isku day cusboonaysiin domain uu fashilmo.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Lacag-bixinta kicisay cusboonaysiinta. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata cusboonaysiin (domain_name, years, iwm.). |
| $error_message | `string` | Farriin khalad oo aadanuhu akhrin karo oo ka timid registrar-ka. |

### Tan iyo

- 2.0.0
### Isha

Waxaa lagu qeexay [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) safka 630
