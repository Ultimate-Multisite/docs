---
id: wu_return_url
title: Filtro - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
## Filtro: wu_return_url

Consenti agli sviluppatori di modificare l'URL di ritorno del gateway utilizzato dopo i processi di checkout.

## Parametri

| Nome | Tipo | Descrizione |
|------|------|-------------|
| $return_url | `string` | l'URL a cui reindirizzare dopo il processo. |
| $gateway | `self` | l'istanza del gateway. |
| $payment | `\WP_Ultimo\Models\Payment` | l'istanza di pagamento Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | l'ordine del carrello Ultimate Multisite corrente. |

### Da

- 2.0.20

### Fonte

Definito in [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) alla riga 683

## Restituisce
