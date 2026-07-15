---
id: wu_domain_registration_completed
title: Veprim - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Aktivizohet pasi një domen të jetë regjistruar me sukses.

## Parametrat {#parameters}

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Pagesa që shkaktoi regjistrimin. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata e regjistrimit (domain_name, provider_id, years, expiry_date, etj.). |
| $result | `array&lt;string,mixed&gt;` | Array i papërpunuar i rezultatit i kthyer nga regjistruesi. |

### Që nga {#since}

- 2.0.0
### Burimi {#source}

Përcaktuar në [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) në rreshtin 1204
