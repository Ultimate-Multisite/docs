---
id: wu_return_url
title: Filtrilo - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filtrilo: wu_return_url

Permesu al programistoj ŝanĝi la revenan URL de la pagpordejo uzatan post pagfinaj procezoj.

## Parametroj {#parameters}

| Nomo | Tipo | Priskribo |
|------|------|-------------|
| $return_url | `string` | la URL al kiu redirekti post la procezo. |
| $gateway | `self` | la pagpordeja instanco. |
| $payment | `\WP_Ultimo\Models\Payment` | la paginstanco de Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | la nuna ĉareta mendo de Ultimate Multisite. |

### Ekde {#since}

- 2.0.20
### Fonto {#source}

Difinita en [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) ĉe linio 683


## Redonas {#returns}
