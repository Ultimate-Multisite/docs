---
id: wu_return_url
title: Saringan - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Ngidini pangembang ngganti URL bali gateway sing digunakake sawisé proses tuku.

## Paramèter

| Jeneng | Tipe | Katrangan |
|------|------|-------------|
| $return_url | `string` | URL kanggo pangalihan sawisé proses. |
| $gateway | `self` | instansi gateway. |
| $payment | `\WP_Ultimo\Models\Payment` | instansi pambayaran Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | pesenan kranjang Ultimate Multisite saiki. |

### Wiwit

- 2.0.20
### Sumber

Ditetepaké ing [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) ing baris 683


## Balikan
