---
id: wu_domain_registration_failed
title: Aktion - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed {#action-wudomainregistrationfailed}

Wird ausgelöst, nachdem ein Versuch zur Domain-Registrierung fehlgeschlagen ist.

## Parameter {#parameters}

| Name | Type | Beschreibung |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Die Zahlung, die die Registrierung ausgelöst hat. |
| $registration_data | `array&lt;string,mixed&gt;` | Registrierungs-Metadaten, einschließlich status=failed und error_message. |
| $error_message | `string` | Eine für Menschen lesbare Fehlermeldung des Registrars. |

### Seit {#since}

- 2.0.0
### Quelle {#source}

Definiert in [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) in Zeile 1250
