---
id: wu_domain_renewal_failed
title: Ação - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Action: wu_domain_renewal_failed

Disparado depois de uma tentativa de renovação de domínio falhar.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | O pagamento que acionou a renovação. |
| $renewal_data | `array&lt;string,mixed&gt;` | Metadados da renovação (domain_name, years, etc.). |
| $error_message | `string` | Mensagem de erro legível por humanos do registrador. |

### Desde

- 2.0.0
### Fonte

Definido em [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) na linha 630
