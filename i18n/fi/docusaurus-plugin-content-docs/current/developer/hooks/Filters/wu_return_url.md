---
id: wu_return_url
title: Suodatin - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Suodatin: wu_return_url {#filter-wureturnurl}

Salli kehittäjien muuttaa maksuyhdyskäytävän paluu-URL-osoitetta, jota käytetään kassaprosessien jälkeen.

## Parametrit {#parameters}

| Nimi | Tyyppi | Kuvaus |
|------|------|-------------|
| $return_url | `string` | URL-osoite, johon ohjataan prosessin jälkeen. |
| $gateway | `self` | maksuyhdyskäytävän instanssi. |
| $payment | `\WP_Ultimo\Models\Payment` | Ultimate Multisite -maksun instanssi. |
| $cart | `\WP_Ultimo\Checkout\Cart` | nykyinen Ultimate Multisite -ostoskorin tilaus. |

### Alkaen versiosta {#since}

- 2.0.20
### Lähde {#source}

Määritelty tiedostossa [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) rivillä 683


## Palauttaa {#returns}
