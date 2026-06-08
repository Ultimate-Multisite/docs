---
id: wu_domain_registration_failed
title: Akcija - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Izvodi se kada pokušaj registracije domena ne uspije.

## Parametri

| Name | Type | Opis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Plaćanje koje je pokrenulo registraciju. |
| $registration_data | `array<string,mixed>` | Metapodaci o registraciji, uključujući status=neuspješno i poruku o grešci. |
| $error_message | `string` | Lako čitljiva poruka o grešci od registra. |

### Od verzije

- 2.0.0
### Izvor

Definisano u [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) na liniji 1250
