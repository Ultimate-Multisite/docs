---
id: wu_domain_registration_failed
title: Radnja - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Pokreće se nakon neuspjelog pokušaja registracije domene.

## Parametri {#parameters}

| Naziv | Vrsta | Opis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Plaćanje koje je pokrenulo registraciju. |
| $registration_data | `array&lt;string,mixed&gt;` | Metapodaci registracije, uključujući status=failed i error_message. |
| $error_message | `string` | Čitljiva poruka o pogrešci od registrara. |

### Od {#since}

- 2.0.0
### Izvor {#source}

Definirano u [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) na retku 1250
