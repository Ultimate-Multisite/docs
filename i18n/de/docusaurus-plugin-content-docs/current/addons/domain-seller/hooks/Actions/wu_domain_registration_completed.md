---
id: wu_domain_registration_completed
title: Aktion - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Wird ausgelöst, nachdem eine Domain erfolgreich registriert wurde.

## Parameter {#parameters}

| Name | Type | Beschreibung |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Die Zahlung, die die Registrierung ausgelöst hat. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadaten zur Registrierung (domain_name, provider_id, years, expiry_date usw.). |
| $result | `array&lt;string,mixed&gt;` | Das Rohergebnis-Array, das vom Registrar zurückgegeben wird. |

### Since {#since}

- 2.0.0
### Source {#source}

Definiert in [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) in Zeile 1204
