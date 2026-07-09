---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Võimaldab arendajatel muuta maksevärava tagastus-URL-i, mida kasutatakse pärast kassaprotsesse.

## Parameetrid

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | URL, kuhu pärast protsessi ümber suunata. |
| $gateway | `self` | maksevärava instants. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite makse instants. |
| $cart | `\WP_Ultimo\Checkout\Cart` | praegune Ultimate Multisite ostukorvi tellimus. |

### Alates

- 2.0.20
### Allikas

Määratletud failis [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) real 683


## Tagastab
