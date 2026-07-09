---
id: wu_return_url
title: Filtru - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filtru: wu_return_url {#filter-wureturnurl}

Jippermetti lill-iżviluppaturi jibdlu l-URL tar-ritorn tal-gateway użat wara l-proċessi ta' checkout.

## Parametri {#parameters}

| Isem | Tip | Deskrizzjoni |
|------|------|-------------|
| $return_url | `string` | il-URL fejn issir ridirezzjoni wara l-proċess. |
| $gateway | `self` | l-istanza tal-gateway. |
| $payment | `\WP_Ultimo\Models\Payment` | l-istanza tal-ħlas ta' Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | l-ordni attwali tal-karrettun ta' Ultimate Multisite. |

### Minn {#since}

- 2.0.20
### Sors {#source}

Definit f'[`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) fil-linja 683


## Jirritorna {#returns}
