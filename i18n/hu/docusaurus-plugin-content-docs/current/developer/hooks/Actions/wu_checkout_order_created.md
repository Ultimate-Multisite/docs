---
id: wu_checkout_order_created
title: Akció - wu_checkout_order_created
sidebar_label: wu_checkout_order_created
_i18n_hash: b84a1cefda2300f7fc20b2f069799f00
---
# Akció: wu_checkout_order_created

Kivitelező, miután a checkout rendelés teljesen összeáll.

Az addonok ezt használhatják, hogy másodlagos tagságokat hozzanak létre termékek számára, amelyek független számlázási ciklusokkal rendelkeznek.

## Paraméterek {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $order | `\WP_Ultimo\Checkout\Cart` | A kosár/rendelés objektuma. |
| $customer | `\WP_Ultimo\Models\Customer` | Az ügyfél. |
| $membership | `\WP_Ultimo\Models\Membership` | A fő tagság. |
| $payment | `\WP_Ultimo\Models\Payment` | A fizetés. |

### Desde {#since}

- 2.5.0
### Forrás {#source}

Definálva [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L891) fájlban a 891-edik soron
