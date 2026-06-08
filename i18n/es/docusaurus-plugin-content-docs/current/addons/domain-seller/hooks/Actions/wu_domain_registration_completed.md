---
id: wu_domain_registration_completed
title: Acción - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed

Se dispara después de que un dominio ha sido registrado con éxito.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | El pago que desencadenó el registro. |
| $registration_data | `array<string,mixed>` | Metadatos de registro (domain_name, provider_id, years, expiry_date, etc.). |
| $result | `array<string,mixed>` | El array de resultados sin procesar devuelto por el registrador. |

### Desde

- 2.0.0
### Fuente

Definido en [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) en la línea 1204
