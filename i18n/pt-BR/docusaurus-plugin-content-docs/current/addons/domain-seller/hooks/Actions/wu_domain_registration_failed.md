---
id: wu_domain_registration_failed
title: Ação - wu_domain_registration_failed
sidebar_label: wu_domain_registration_failed
_i18n_hash: 4255f34307a46a9129dc40e713fb9b5b
---
# Ação: wu_domain_registration_failed

Dispara quando uma tentativa de registro de domínio falha.

## Parâmetros

| Nome | Tipo | Descrição |
|------|------|-------------|
| $payment | `\WP_Ultimo\Models\Payment` | O pagamento que disparou o registro. |
| $registration_data | `array&lt;string,mixed&gt;` | Metadados de registro, incluindo status=failed e error_message. |
| $error_message | `string` | Mensagem de erro legível por humanos vinda do registrador. |

### Desde

- 2.0.0
### Fonte

Definido em [`inc/class-checkout-integration.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-domain-seller/blob/main/inc/class-checkout-integration.php#L1250) na linha 1250
