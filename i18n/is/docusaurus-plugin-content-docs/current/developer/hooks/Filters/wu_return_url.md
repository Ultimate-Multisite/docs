---
id: wu_return_url
title: Sía - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Sía: wu_return_url

Leyfir þróunaraðilum að breyta skilaslóð gáttarinnar sem er notuð eftir checkout-ferli.

## Færibreytur {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | URL-slóðin sem á að beina á eftir ferli. |
| $gateway | `self` | gáttartilvikið. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite greiðslutilvikið. |
| $cart | `\WP_Ultimo\Checkout\Cart` | núverandi Ultimate Multisite körfupöntun. |

### Síðan {#since}

- 2.0.20
### Uppruni {#source}

Skilgreint í [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) á línu 683


## Skilar {#returns}
