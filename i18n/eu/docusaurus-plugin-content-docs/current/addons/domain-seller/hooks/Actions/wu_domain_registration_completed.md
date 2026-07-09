---
id: wu_domain_registration_completed
title: Ekintza - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Ekintza: wu_domain_registration_completed

Domeinu bat arrakastaz erregistratu ondoren abiarazten da.

## Parametroak

| Izena | Mota | Deskribapena |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Erregistroa abiarazi zuen ordainketa. |
| $registration_data | `array&lt;string,mixed&gt;` | Erregistroaren metadatuak (domain_name, provider_id, years, expiry_date, etab.). |
| $result | `array&lt;string,mixed&gt;` | Erregistratzaileak itzulitako emaitza gordinaren array-a. |

### Noiztik

- 2.0.0
### Iturburua

1204. lerroan definituta [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) fitxategian
