---
id: wu_return_url
title: Saringan - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Saringan: wu_return_url

Ngidinan pamekar pikeun ngarobah URL balik gerbang anu dipaké sanggeus prosés pamariksaan.

## Paraméter

| Ngaran | Tipe | Pedaran |
|------|------|-------------|
| $return_url | `string` | URL pikeun ngalihkeun sanggeus prosés. |
| $gateway | `self` | instansi gerbang. |
| $payment | `\WP_Ultimo\Models\Payment` | instansi pamayaran Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | urutan karanjang Ultimate Multisite ayeuna. |

### Ti saprak

- 2.0.20
### Sumber

Ditetepkeun dina [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) dina garis 683


## Balikan
