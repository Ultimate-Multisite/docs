---
id: wu_domain_registration_failed
title: Acción - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Acción: wu_domain_registration_failed

Se dispara después de que un intento de registro de dominio falla.

## Parámetros {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | El pago que desencadenó el registro. |
| $registration_data | `array<string,mixed>` | Metadatos de registro que incluyen status=failed y error_message. |
| $error_message | `string` | Mensaje de error legible por humanos proporcionado por el registrador. |

### Desde {#since}

- 2.0.0
### Fuente {#source}

Definido en [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) en la línea 1250
