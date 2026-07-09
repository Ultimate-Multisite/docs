---
id: wu_domain_registration_completed
title: Tegevus - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Toiming: wu_domain_registration_completed

Käivitub pärast seda, kui domeen on edukalt registreeritud.

## Parameetrid

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Makse, mis käivitas registreerimise. |
| $registration_data | `array&lt;string,mixed&gt;` | Registreerimise metaandmed (domain_name, provider_id, years, expiry_date jne). |
| $result | `array&lt;string,mixed&gt;` | Registripidaja tagastatud töötlemata tulemuste massiiv. |

### Alates

- 2.0.0
### Allikas

Määratletud failis [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) real 1204
