---
id: wu_domain_registration_completed
title: Action - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Triggas när ett domännamn har registrerats framgångsrikt.

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Betalningen som utlöste registreringen. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadata för registreringen (domain_name, provider_id, years, expiry_date, etc.). |
| $result | `array&lt;string,mixed&gt;` | Rå resultatarray som returneras av registratorn. |

### Sedan {#since}

- 2.0.0
### Källa {#source}

Definieras i [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) på rad 1204
