---
id: wu_domain_registration_completed
title: Ação - wu_domain_registration_completed
sidebar_label: wu_domain_registration_completed
_i18n_hash: 092b475e74f3b937af068c83eeba2e0a
---
# Action: wu_domain_registration_completed {#action-wudomainregistrationcompleted}

Dispara depois que um domínio é registrado com sucesso.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | O pagamento que acionou o registro. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadados de registro (domain_name, provider_id, years, expiry_date, etc.). |
| $result | `array&lt;string,mixed&gt;` | Array de resultados brutos retornado pelo registrador. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido em [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1204) na linha 1204
