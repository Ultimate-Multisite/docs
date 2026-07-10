---
id: wu_domain_registration_failed
title: Aksyon - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Aksyon: wu_domain_registration_failed {#action-wudomainregistrationfailed}

Mopalong human mapakyas ang pagsulay sa pagparehistro sa domain.

## Mga Parameter {#parameters}

| Ngalan | Type | Deskripsyon |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ang bayad nga nagpahinabo sa pagparehistro. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata sa pagparehistro lakip ang status=failed ug error_message. |
| $error_message | `string` | Sayon-masabtan nga mensahe sa sayop gikan sa registrar. |

### Sukad {#since}

- 2.0.0
### Tinubdan {#source}

Gihubit sa [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) sa linya 1250
