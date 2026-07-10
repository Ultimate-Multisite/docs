---
id: wu_domain_registration_completed
title: Action - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Kjøres etter at et domene er registrert med hell.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Betalingen som utløste registreringen. |
| $registration_data | `array<string,mixed>` | Metadata for registreringen (dom_name, provider_id, years, expiry_date, etc.). |
| $result | `array<string,mixed>` | Rå resultat-array returnert av registeringsbyrået. |

### Siden {#since}

- 2.0.0
### Kilde {#source}

Definert i [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) på linje 1204
