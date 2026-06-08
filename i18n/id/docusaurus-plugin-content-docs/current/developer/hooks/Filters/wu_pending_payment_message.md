---
id: wu_pending_payment_message
title: Filter - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Memungkinkan pengguna untuk mengubah pesan mengenai pembayaran yang tertunda.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Pesan yang akan ditampilkan. |
| $customer | `\WP_Ultimo\Models\Customer` | Pelanggan saat ini. |
| $pending_payments | `array` | Daftar pembayaran yang tertunda. |

### Sejak

- 2.0.19
### Sumber

Didefinisikan di [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) pada baris 244
