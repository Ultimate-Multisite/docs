---
id: wu_return_url
title: Penapis - wu_return_url
sidebar_label: wu_return_url
_i18n_hash: 73bff0c05bc9b1dad029b7438b1a4f7c
---
# Filter: wu_return_url

Membolehkan pembangun mengubah URL pulangan gateway yang digunakan selepas proses checkout.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $return_url | `string` | URL yang akan dialihkan selepas proses. |
| $gateway | `self` | Contoh gateway. |
| $payment | `\WP_Ultimo\Models\Payment` | Contoh pembayaran Ultimate Multisite. |
| $cart | `\WP_Ultimo\Checkout\Cart` | Pesanan troli Ultimate Multisite semasa. |

### Sejak

- 2.0.20
### Sumber

Didefinisikan dalam [`inc/gateways/class-base-gateway.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/gateways/class-base-gateway.php#L683) pada baris 683.


## Pulangan
