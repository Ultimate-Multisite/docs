---
id: wu_domain_registration_completed
title: Chiito - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Chiito: wu_domain_registration_completed

Chinotanga mushure mekunge domain yanyoreswa zvinobudirira.

## Maparameter {#parameters}

| Zita | Rudzi | Tsananguro |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Mubhadharo wakakonzera kunyoresa. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata yekunyoresa (domain_name, provider_id, years, expiry_date, nezvimwe). |
| $result | `array&lt;string,mixed&gt;` | Array yemhedzisiro isina kugadziriswa yakadzorerwa ne registrar. |

### Kubva {#since}

- 2.0.0
### Kwakabva {#source}

Yakatsanangurwa mu [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) pamutsara 1204
