---
id: wu_domain_registration_failed
title: Akcja - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Action: wu_domain_registration_failed

Wyzwala się po nieudanej próbie rejestracji domeny.

## Parametry

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | Płatność, która wywołała rejestrację. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadane rejestracji, które zawierają status=failed oraz error_message. |
| $error_message | `string` | Łatko czytelny komunikat o błędzie od rejestratora. |

### Since

- 2.0.0
### Source

Zdefiniowane w [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) w linii 1250
