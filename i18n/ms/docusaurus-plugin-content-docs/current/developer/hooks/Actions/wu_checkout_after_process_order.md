---
id: wu_checkout_after_process_order
title: Action - wu_checkout_after_process_order
sidebar_label: wu_checkout_after_process_order
_i18n_hash: 40a5c096f223c5f82a109163c29284d3
---
# Action: wu_checkout_after_process_order {#action-wucheckoutafterprocessorder}

Membolehkan pembangun mencetuskan *hook* tambahan.

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $checkout | `\Checkout` | Objek *checkout* yang diinstansikan. |
| $cart | `\Cart` | Objek troli *checkout*. |

### Sejak {#since}

- 2.0.9
### Sumber {#source}

Didefinisikan dalam [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1013) pada baris 1013
