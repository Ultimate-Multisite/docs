---
id: wu_domain_registration_failed
title: Tallaabo - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Ficil: wu_domain_registration_failed

Waxay dhacdaa ka dib marka isku dayga diiwaangelinta domain uu fashilmo.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Lacag-bixinta kicisay diiwaangelinta. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata-ga diiwaangelinta oo ay ku jiraan status=failed iyo error_message. |
| $error_message | `string` | Fariin khalad oo dadka akhriyi karaan oo ka timid registrar-ka. |

### Tan iyo {#since}

- 2.0.0
### Isha {#source}

Waxaa lagu qeexay [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) xariiqda 1250
