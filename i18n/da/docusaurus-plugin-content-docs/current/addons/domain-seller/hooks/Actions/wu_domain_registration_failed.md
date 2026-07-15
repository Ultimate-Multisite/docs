---
id: wu_domain_registration_failed
title: Handling - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Udløses efter et forsøg på domæneregistrering mislykkes.

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Betalingen, der udløste registreringen. |
| $registration_data | `array&lt;string,mixed&gt;` | Registreringsmetadata inklusive status=failed og error_message. |
| $error_message | `string` | Menneskeligt læsbar fejlmeddelelse fra registratoren. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) på linje 1250
