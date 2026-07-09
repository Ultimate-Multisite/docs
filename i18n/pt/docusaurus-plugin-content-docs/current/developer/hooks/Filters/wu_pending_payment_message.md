---
id: wu_pending_payment_message
title: Filtro - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filtro: wu_pending_payment_message {#filter-wupendingpaymentmessage}

Permite ao utilizador alterar a mensagem sobre os pagamentos pendentes.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $message | `string` | A mensagem a imprimir. |
| $customer | `\WP_Ultimo\Models\Customer` | O cliente atual. |
| $pending_payments | `array` | Uma lista com pagamentos pendentes. |

### Desde {#since}

- 2.0.19
### Fonte {#source}

Definido em [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) na linha 244
