---
id: wu_domain_registration_completed
title: Actio - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Actio: wu_domain_registration_completed

Excutitur postquam dominium feliciter registratum est.

## Parametra

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Solutio quae registrationem excitavit. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata registrationis (domain_name, provider_id, years, expiry_date, etc.). |
| $result | `array&lt;string,mixed&gt;` | Rudis series resultati a registratore reddita. |

### Ab

- 2.0.0
### Fons

Definitum in [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) linea 1204
