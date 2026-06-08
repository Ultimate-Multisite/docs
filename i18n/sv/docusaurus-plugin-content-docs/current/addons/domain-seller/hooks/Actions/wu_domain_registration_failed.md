---
id: wu_domain_registration_failed
title: Action - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Triggas när ett försök till domänregistrering misslyckas.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Betalningen som utlöste registreringen. |
| $registration_data | `array&lt;string,mixed&gt;` | Registreringsmetadata som inkluderar status=failed och error_message. |
| $error_message | `string` | Ett lättläst felmeddelande från registratorn. |

### Sedan

- 2.0.0
### Källa

Definieras i [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) på rad 1250
