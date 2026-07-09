---
id: wu_domain_registration_failed
title: Aiki - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Aiki: wu_domain_registration_failed

Yana faruwa bayan yunƙurin rajistar domain ya gaza.

## Sigogi

| Suna | Nau'i | Bayani |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Biyan kuɗin da ya jawo rajista. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata na rajista ciki har da status=failed da error_message. |
| $error_message | `string` | Saƙon kuskure mai sauƙin fahimta daga registrar. |

### Tun daga

- 2.0.0
### Tushe

An bayyana a cikin [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) a layi 1250
