---
id: wu_domain_renewal_completed
title: Ação - wu_domain_renewal_completed
sidebar_label: wu_domain_renewal_completed
_i18n_hash: d4aa4ba2d3cd00aaa0ea699102a863e6
---
# Ação: wu_domain_renewal_completed

Dispara após um domínio ter sido renovado com sucesso.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | O pagamento que acionou a renovação. |
| $renewal_data | `array<string,mixed>` | Metadados de renovação (domain_name, years, customer_id, etc.). |
| $result | `array<string,mixed>` | Array de resultado bruto retornado pelo registrador, incluindo a nova expiry_date. |

### Desde

- 2.0.0
### Fonte

Definido em [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L594) na linha 594
