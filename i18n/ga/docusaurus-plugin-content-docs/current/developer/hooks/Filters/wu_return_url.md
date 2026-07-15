---
id: wu_return_url
title: Scagaire - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Scagaire: wu_return_url

Ligeann sé d’fhorbróirí URL fillte an gheata íocaíochta a úsáidtear tar éis próisis checkout a athrú.

## Paraiméadair {#parameters}

| Ainm | Cineál | Cur síos |
|------|------|-------------|
| $return_url | `string` | an URL chun atreorú chuige tar éis an phróisis. |
| $gateway | `self` | an t-ásc geata íocaíochta. |
| $payment | `\WP_Ultimo\Models\Payment` | an t-ásc íocaíochta Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | ordú reatha na cairte Ultimate Multisite. |

### Ó {#since}

- 2.0.20
### Foinse {#source}

Sainithe in [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) ag líne 683


## Filleadh {#returns}
