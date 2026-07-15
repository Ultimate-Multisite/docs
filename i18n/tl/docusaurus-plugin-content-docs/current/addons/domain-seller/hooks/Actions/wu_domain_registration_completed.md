---
id: wu_domain_registration_completed
title: Aksyon - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Nati-trigger pagkatapos matagumpay na mairehistro ang isang domain.

## Mga Parameter {#parameters}

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Ang payment na nag-trigger ng pagpaparehistro. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata ng pagpaparehistro (domain_name, provider_id, years, expiry_date, atbp.). |
| $result | `array&lt;string,mixed&gt;` | Raw na result array na ibinalik ng registrar. |

### Mula noong {#since}

- 2.0.0
### Pinagmulan {#source}

Tinukoy sa [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) sa linya 1204
