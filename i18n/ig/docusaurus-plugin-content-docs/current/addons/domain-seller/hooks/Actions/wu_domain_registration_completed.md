---
id: wu_domain_registration_completed
title: Omume - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Omume: wu_domain_registration_completed

Na-eme mgbe edebanyere ngalaba aha nke ọma.

## Paramita {#parameters}

| Aha | Ụdị | Nkọwa |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ụgwọ kpalitere ndebanye aha. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata ndebanye aha (domain_name, provider_id, years, expiry_date, wdg.). |
| $result | `array&lt;string,mixed&gt;` | Array nsonaazụ raw nke onye na-edebanye aha weghachitere. |

### Kemgbe {#since}

- 2.0.0
### Isi mmalite {#source}

A kọwara ya na [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) na ahịrị 1204
