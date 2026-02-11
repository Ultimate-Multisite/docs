---
id: wu_return_url
title: Filtro - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Permitir que os desenvolvedores alterem a URL de retorno da gateway usada após os processos de checkout.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | a URL para redirecionar após o processo. |
| $gateway | `self` | a instância da gateway. |
| $payment | `\WP_Ultimo\Models\Payment` | a instância de pagamento do Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | o pedido atual do carrinho do Ultimate Multisite. |

### Since

- 2.0.20

### Source

Defined in [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) at line 683

## Returns
