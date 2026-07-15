---
id: wu_domain_registration_failed
title: Aksyon - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Aksyon: wu_domain_registration_failed

Nagaganap pagkatapos mabigo ang pagtatangkang magparehistro ng domain.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ang bayad na nagpasimula ng pagpaparehistro. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata ng pagpaparehistro kabilang ang status=failed at error_message. |
| $error_message | `string` | Mensahe ng error na nababasa ng tao mula sa tagapagrehistro. |

### Mula Noong {#since}

- 2.0.0
### Pinagmulan {#source}

Tinukoy sa [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) sa linya 1250
