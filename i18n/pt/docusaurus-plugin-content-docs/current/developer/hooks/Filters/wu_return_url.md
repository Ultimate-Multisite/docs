---
id: wu_return_url
title: Filtro - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filtro: wu_return_url

Permite que os programadores alterem a URL de retorno do gateway usada após os processos de finalização de compra.

## Parâmetros {#parameters}

| Nome | Tipo | Descrição |
|------|------|-------------|
| $return_url | `string` | a URL para redirecionar após o processo. |
| $gateway | `self` | a instância do gateway. |
| $payment | `\WP_Ultimo\Models\Payment` | a instância de pagamento do Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | o pedido atual do carrinho do Ultimate Multisite. |

### Desde {#since}

- 2.0.20
### Fonte {#source}

Definido em [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) na linha 683


## Retorna {#returns}
