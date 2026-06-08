---
id: wu_domain_renewal_completed
title: Acción - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Se dispara después de que un dominio ha sido renovado con éxito.

## Parámetros

| Name | Type | Description |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | El pago que desencadenó la renovación. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadatos de renovación (domain_name, years, customer_id, etc.). |
| $result | `array&lt;string,mixed&gt;` | Array de resultados sin procesar devuelto por el registrador, incluyendo la nueva expiry_date. |

### Desde

- 2.0.0
### Fuente

Definido en [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) en la línea 594
