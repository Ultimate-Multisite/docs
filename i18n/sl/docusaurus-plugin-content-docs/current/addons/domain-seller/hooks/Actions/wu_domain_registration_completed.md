---
id: wu_domain_registration_completed
title: Dejanje - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Sproži se, ko je domena uspešno registrirana.

## Parametri

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Plačilo, ki je sprožilo registracijo. |
| $registration_data | `array&lt;string,mixed&gt;` | Metapodatki registracije (domain_name, provider_id, years, expiry_date itd.). |
| $result | `array&lt;string,mixed&gt;` | Neobdelano polje rezultatov, ki ga vrne registrator. |

### Od različice

- 2.0.0
### Vir

Opredeljeno v [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) v vrstici 1204
