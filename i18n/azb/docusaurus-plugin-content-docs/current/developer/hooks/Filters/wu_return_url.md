---
id: wu_return_url
title: Filter - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Memungkinkan pengembang untuk mengubah URL kembalian gateway yang digunakan setelah proses checkout.

## Parameter {#parameters}

| Name | Type | Deskripsi |
|------|------|-------------|
| $return_url | `string` | URL yang akan diarahkan setelah proses selesai. |
| $gateway | `self` | instance gateway yang sedang digunakan. |
| $payment | `\WP_Ultimo\Models\Payment` | instance pembayaran Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | pesanan keranjang Ultimate Multisite saat ini. |

### Sejak {#since}

- 2.0.20
### Sumber {#source}

Didefinisikan di [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) pada baris 683


## Nilai Kembalian {#returns}
