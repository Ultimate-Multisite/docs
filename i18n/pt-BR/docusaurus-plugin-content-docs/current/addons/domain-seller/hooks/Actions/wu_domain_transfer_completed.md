---
id: wu_domain_transfer_completed
title: Ação - wu_domain_transfer_completed
sidebar_label: wu_domain_transfer_completed
_i18n_hash: e50e8bb82f31cdf65af114919b65343a
---
# Ação: wu_domain_transfer_completed

Dispara após a conclusão de uma transferência de domínio.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $domain | `\WP_Ultimo\Models\Domain` | O objeto do domínio. |
| $transfer_data | `array` | Dados de conclusão da transferência. |

### Desde {#since}

- 2.1.0
### Fonte {#source}

Definido em [`inc/class-domain-transfer-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-domain-transfer-manager.php#L690) na linha 690
