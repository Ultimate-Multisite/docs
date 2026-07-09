---
id: wu_return_url
title: Filtro - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filtro: wu_return_url {#filter-wureturnurl}

Permite aos desenvolvedores cambiar o URL de retorno da pasarela usado despois dos procesos de finalización da compra.

## Parámetros {#parameters}

| Nome | Tipo | Descrición |
|------|------|-------------|
| $return_url | `string` | o URL ao que redirixir despois do proceso. |
| $gateway | `self` | a instancia da pasarela. |
| $payment | `\WP_Ultimo\Models\Payment` | a instancia de pagamento de Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | o pedido do carriño actual de Ultimate Multisite. |

### Dende {#since}

- 2.0.20
### Fonte {#source}

Definido en [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) na liña 683


## Devolve {#returns}
