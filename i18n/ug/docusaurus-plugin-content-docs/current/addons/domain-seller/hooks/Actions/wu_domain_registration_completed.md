---
id: wu_domain_registration_completed
title: ھەرىكەت - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

دائىرە مۇۋەپپەقىيەتلىك تىزىملىتىلغاندىن كېيىن قوزغىلىدۇ.

## پارامېتىرلار {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | تىزىملىتىشنى قوزغاتقان چىقىم. |
| $registration_data | `array&lt;string,mixed&gt;` | تىزىملىتىش مېتائۇچۇرى (domain_name، provider_id، years، expiry_date قاتارلىقلار). |
| $result | `array&lt;string,mixed&gt;` | registrar تەرىپىدىن قايتۇرۇلغان خام نەتىجە array. |

### Since {#since}

- 2.0.0
### مەنبە {#source}

[`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) دا 1204-قۇردا بېكىتىلگەن
