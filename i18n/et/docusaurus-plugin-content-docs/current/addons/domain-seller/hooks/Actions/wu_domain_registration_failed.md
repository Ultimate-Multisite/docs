---
id: wu_domain_registration_failed
title: Toiming - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Toiming: wu_domain_registration_failed

Käivitub pärast domeeni registreerimise katse nurjumist.

## Parameetrid

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Makse, mis käivitas registreerimise. |
| $registration_data | `array&lt;string,mixed&gt;` | Registreerimise metaandmed, sealhulgas status=failed ja error_message. |
| $error_message | `string` | Inimloetav veateade registraatorilt. |

### Alates

- 2.0.0
### Allikas

Määratletud failis [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) real 1250
