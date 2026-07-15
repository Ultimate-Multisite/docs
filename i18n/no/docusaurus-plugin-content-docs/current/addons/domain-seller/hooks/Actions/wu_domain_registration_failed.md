---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Utløses når et forsøk på domenergistrering mislykkes.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Betalingen som utløste registreringen. |
| $registration_data | `array<string,mixed>` | Registreringsmetadata som inkluderer status=failed og error_message. |
| $error_message | `string` | En lettlest feilmelding fra registeret. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) på linje 1250
