---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Ito ay tumutugon (fires) pagkatapos mabigo ang pagtatangka na mag-rehistro ng domain.

## Mga Parameter

| Name | Type | Paglalarawan |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ang bayad na nagpasimula ng pagrehistro. |
| $registration_data | `array<string,mixed>` | Metadata ng pagrehistro na naglalaman ng status=failed at error_message. |
| $error_message | `string` | Ang mensahe ng error na madaling basahin (human-readable) mula sa registrar. |

### Mula pa noong

- 2.0.0
### Pinagmulan

Tinukoy sa [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) sa linya 1250
