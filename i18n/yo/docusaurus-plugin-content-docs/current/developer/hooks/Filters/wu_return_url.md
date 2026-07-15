---
id: wu_return_url
title: Àlẹmọ - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Àlẹmọ: wu_return_url

Gba awọn olùgbéejáde laaye lati yi URL ipadabọ ẹnu-ọna ti a nlo lẹ́yìn awọn ilana checkout pada.

## Àwọn Paramita {#parameters}

| Orúkọ | Iru | Àpèjúwe |
|------|------|-------------|
| $return_url | `string` | URL lati darí padà lẹ́yìn ilana. |
| $gateway | `self` | àpẹẹrẹ ẹnu-ọna naa. |
| $payment | `\WP_Ultimo\Models\Payment` | àpẹẹrẹ isanwo Ultimate Multisite naa. |
| $cart | `\WP_Ultimo\Checkout\Cart` | aṣẹ agbọn Ultimate Multisite lọwọlọwọ. |

### Láti {#since}

- 2.0.20
### Orísun {#source}

Ti ṣàlàyé ninu [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) ní ila 683


## Àwọn Ìpadà {#returns}
