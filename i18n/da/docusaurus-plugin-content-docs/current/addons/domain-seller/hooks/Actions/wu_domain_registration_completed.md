---
id: wu_domain_registration_completed
title: Handling - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Udløses efter et domæne er blevet registreret.

## Parametre {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Betalingen, der udløste registreringen. |
| $registration_data | `array&lt;string,mixed&gt;` | Registreringsmetadata (domain_name, provider_id, years, expiry_date osv.). |
| $result | `array&lt;string,mixed&gt;` | Råt result-array returneret af registraren. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Defineret i [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) på linje 1204
