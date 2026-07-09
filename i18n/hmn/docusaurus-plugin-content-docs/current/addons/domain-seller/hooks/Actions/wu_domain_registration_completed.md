---
id: wu_domain_registration_completed
title: Kev ua - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Khiav tom qab ib lub domain tau raug tso npe tiav lawm.

## Cov Parameter

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Qhov kev them nyiaj uas ua rau muaj kev tso npe. |
| $registration_data | `array&lt;string,mixed&gt;` | Cov metadata ntawm kev tso npe (domain_name, provider_id, years, expiry_date, thiab lwm yam). |
| $result | `array&lt;string,mixed&gt;` | Raw result array uas tus registrar xa rov qab. |

### Txij thaum

- 2.0.0
### Source

Tau txhais hauv [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) ntawm kab 1204
