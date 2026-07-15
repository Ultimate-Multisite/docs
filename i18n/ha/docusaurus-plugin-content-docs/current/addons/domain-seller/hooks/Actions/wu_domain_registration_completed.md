---
id: wu_domain_registration_completed
title: Aiki - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Aiki: wu_domain_registration_completed

Yana aiki bayan an yi nasarar rijistar domain.

## Sigogi {#parameters}

| Suna | Nau'i | Bayani |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Biyan kuɗin da ya jawo rijistar. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata na rijista (domain_name, provider_id, years, expiry_date, da sauransu). |
| $result | `array&lt;string,mixed&gt;` | Danyen array na sakamako da registrar ya dawo da shi. |

### Tun {#since}

- 2.0.0
### Tushe {#source}

An ayyana a cikin [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) a layi na 1204
