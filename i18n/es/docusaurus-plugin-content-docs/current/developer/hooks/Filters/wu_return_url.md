---
id: wu_return_url
title: Filtro - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filtro: wu_return_url

Permite a los desarrolladores cambiar la URL de retorno del gateway utilizada después de los procesos de pago.

## Parámetros

| Nombre | Tipo | Descripción |
|------|------|-------------|
| $return_url | `string` | la URL a redirigir después del proceso. |
| $gateway | `self` | la instancia del gateway. |
| $payment | `\WP_Ultimo\Models\Payment` | la instancia de pago de Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | el pedido actual del carrito de Ultimate Multisite. |

### Desde

- 2.0.20

### Fuente

Definido en [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) en la línea 683


## Devuelve

