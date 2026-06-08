---
id: wu_domain_registration_completed
title: Akcija - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Izvršava se nakon što je domen uspješno registrovan.

## Parametri

| Name | Type | Opis |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Plaćanje koje je pokrenulo registraciju. |
| $registration_data | `array&lt;string,mixed&gt;` | Metapodaci o registraciji (domain_name, provider_id, years, expiry_date, itd.). |
| $result | `array&lt;string,mixed&gt;` | Sirovi niz rezultata koji je vratio registrator. |

### Od

- 2.0.0
### Izvor

Definisano u [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) na liniji 1204
