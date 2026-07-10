---
id: wu_domain_renewal_completed
title: Chiito - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Chiito: wu_domain_renewal_completed {#action-wudomainrenewalcompleted}

Chinotanga mushure mekunge domain yavandudzwa zvinobudirira.

## Maparameter {#parameters}

| Zita | Rudzi | Tsananguro |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Muripo wakatanga kuvandudzwa. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadata yekuvandudza (domain_name, years, customer_id, nezvimwe). |
| $result | `array&lt;string,mixed&gt;` | Array yemhedzisiro mbishi yakadzorerwa neregistrar inosanganisira expiry_date itsva. |

### Kubva {#since}

- 2.0.0
### Kwakabva {#source}

Yakatsanangurwa mu[`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) pamutsara 594
