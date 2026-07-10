---
id: wu_checkout_order_created
title: Tindakan - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Action: wu_checkout_order_created {#action-wucheckoutordercreated}

Dipicu selepas pesanan checkout selesai dibentuk.

Addon boleh menggunakan ini untuk mencipta keahlian sekunder bagi produk yang mempunyai kitaran pengebilan yang berasingan.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Objek troli/pesanan. |
| $customer | `\WP_Ultimo\Models\Customer` | Pelanggan. |
| $membership | `\WP_Ultimo\Models\Membership` | Keahlian utama. |
| $payment | `\WP_Ultimo\Models\Payment` | Pembayaran. |

### Since {#since}

- 2.5.0
### Source {#source}

Ditakrifkan dalam [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) pada baris 891
