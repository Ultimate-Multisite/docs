---
id: wu_checkout_order_created
title: Aksi - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Aksi: wu_checkout_order_created

Dijalankeun sanggeus order checkout réngsé dirakit sapinuhna.

Addon tiasa ngagunakeun ieu pikeun nyieun kaanggotaan sekundér pikeun produk anu boga siklus tagihan mandiri.

## Paraméter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | Obyék cart/order. |
| $customer | `\WP_Ultimo\Models\Customer` | Palanggan. |
| $membership | `\WP_Ultimo\Models\Membership` | Kaanggotaan utama. |
| $payment | `\WP_Ultimo\Models\Payment` | Pamayaran. |

### Ti saprak {#since}

- 2.5.0
### Sumber {#source}

Didefinisikeun dina [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) dina baris 891
