---
id: wu_domain_registration_completed
title: Ago - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Ago: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Ekfunkcias post kiam domajno estis sukcese registrita.

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | La pago kiu ekigis registradon. |
| $registration_data | `array&lt;string,mixed&gt;` | Registradaj metadatumoj (domain_name, provider_id, years, expiry_date, ktp.). |
| $result | `array&lt;string,mixed&gt;` | Kruda rezult-tabelo resendita de la registristo. |

### Ekde {#since}

- 2.0.0
### Fonto {#source}

Difinita en [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) ĉe linio 1204
