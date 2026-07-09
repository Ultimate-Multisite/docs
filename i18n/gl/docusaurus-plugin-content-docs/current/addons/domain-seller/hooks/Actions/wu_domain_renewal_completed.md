---
id: wu_domain_renewal_completed
title: Acción - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Acción: wu_domain_renewal_completed

Dispárase despois de que un dominio fose renovado correctamente.

## Parámetros

| Nome | Tipo | Descrición |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | O pagamento que activou a renovación. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadatos da renovación (domain_name, years, customer_id, etc.). |
| $result | `array&lt;string,mixed&gt;` | Matriz de resultados en bruto devolta polo rexistrador, incluída a nova expiry_date. |

### Desde

- 2.0.0
### Fonte

Definido en [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) na liña 594
