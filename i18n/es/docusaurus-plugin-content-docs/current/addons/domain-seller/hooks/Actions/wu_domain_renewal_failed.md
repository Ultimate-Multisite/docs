---
id: wu_domain_renewal_failed
title: Acción - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Acción: wu_domain_renewal_failed

Se dispara cuando un intento de renovación de dominio falla.

## Parámetros {#parameters}

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | El pago que desencadenó la renovación. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadatos de la renovación (nombre del dominio, años, etc.). |
| $error_message | `string` | Mensaje de error legible por humanos proporcionado por el registrador. |

### Desde {#since}

- 2.0.0
### Fuente {#source}

Definido en [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) en la línea 630
