---
id: wu_return_url
title: Filtrum - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filtrum: wu_return_url

Sinite evolutores mutare URL reditus portae, adhibitum post processus checkout.

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $return_url | `string` | URL ad redirigendum post processum. |
| $gateway | `self` | instantia portae. |
| $payment | `\WP_Ultimo\Models\Payment` | instantia solutionis Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | ordo corbis currentis Ultimate Multisite. |

### Ab {#since}

- 2.0.20
### Fons {#source}

Definitum in [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) ad lineam 683


## Reditus {#returns}
