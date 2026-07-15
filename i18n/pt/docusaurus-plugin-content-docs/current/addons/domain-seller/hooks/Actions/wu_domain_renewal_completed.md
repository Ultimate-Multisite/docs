---
id: wu_domain_renewal_completed
title: Ação - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Action: wu_domain_renewal_completed

Disparada após um domínio ter sido renovado com sucesso.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | O pagamento que acionou a renovação. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadados da renovação (domain_name, years, customer_id, etc.). |
| $result | `array&lt;string,mixed&gt;` | Array de resultado bruto retornado pelo registrador, incluindo o novo expiry_date. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido em [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) na linha 594
