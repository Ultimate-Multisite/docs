---
id: wu_pending_payment_message
title: Penapis - wu_pending_payment_message
sidebar_label: wu_pending_payment_message
_i18n_hash: 94115f867afff4cc7741fd5b2ef45bd2
---
# Filter: wu_pending_payment_message

Membenarkan pengguna mengubah suai mesej yang dipaparkan mengenai pembayaran yang masih tertangguh.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $message | `string` | Mesej yang akan dipaparkan. |
| $customer | `\WP_Ultimo\Models\Customer` | Pelanggan semasa. |
| $pending_payments | `array` | Senarai pembayaran yang masih tertangguh. |

### Since {#since}

- 2.0.19
### Source {#source}

Didefinisikan dalam [`inc/managers/class-payment-manager.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/managers/class-payment-manager.php#L244) pada baris 244
