---
id: wu_domain_registration_completed
title: Akce - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Vyvolá se po úspěšné registraci domény.

## Parametry

| Název | Typ | Popis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Platba, která vyvolala registraci. |
| $registration_data | `array&lt;string,mixed&gt;` | Metainformace o registraci (domain_name, provider_id, years, expiry_date atd.). |
| $result | `array&lt;string,mixed&gt;` | Původní pole výsledků vrácené registrarem. |

### Od

- 2.0.0
### Zdroj

Definováno v [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) na řádku 1204
