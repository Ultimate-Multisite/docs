---
id: wu_domain_registration_completed
title: Acción - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Execútase despois de que un dominio se rexistrase correctamente.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | O pagamento que desencadeou o rexistro. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadatos do rexistro (domain_name, provider_id, years, expiry_date, etc.). |
| $result | `array&lt;string,mixed&gt;` | Array de resultado bruto devolto polo rexistrador. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido en [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) na liña 1204
