---
id: wu_domain_renewal_failed
title: Ação - wu_domain_renewal_failed
sidebar_label: wu_domain_renewal_failed
_i18n_hash: bff3fd7903485780766e490300546070
---
# Ação: wu_domain_renewal_failed

É acionada quando uma tentativa de renovação de domínio falha.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | O pagamento que disparou a renovação. |
| $renewal_data | `array<string,mixed>` | Metadados de renovação (nome do domínio, anos, etc.). |
| $error_message | `string` | Mensagem de erro legível por humanos vinda do registrador. |

### Desde {#since}

- 2.0.0
### Fonte {#source}

Definido em [`inc/class-domain-renewal-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-renewal-manager.php#L630) na linha 630
