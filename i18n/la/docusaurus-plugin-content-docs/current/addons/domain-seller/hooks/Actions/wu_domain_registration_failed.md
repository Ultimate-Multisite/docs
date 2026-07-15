---
id: wu_domain_registration_failed
title: Actio - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Actio: wu_domain_registration_failed

Excitatur postquam conatus registrationis dominii deficit.

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Solutio quae registrationem excitavit. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata registrationis, includens status=failed et error_message. |
| $error_message | `string` | Nuntius erroris humano lectu facilis a registratore. |

### Ex quo {#since}

- 2.0.0
### Fons {#source}

Definitum in [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) linea 1250
