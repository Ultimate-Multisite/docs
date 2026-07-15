---
id: wu_maybe_create_customer
title: Tumindak - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Action: wu_maybe_create_customer

Ngidini pangembang tambahan nindakake perkara tambahan nalika pelanggan ditambahake.

Ing kéné panggonan kita nambahake hook kanggo nambah customer-&gt;user menyang situs utama uga, contoné.

## Paramèter {#parameters}

| Jeneng | Jinis | Katrangan |
|------|------|-------------|
| $customer | `\Customer` | Pelanggan sing bisa waé digawe. |
| $checkout | `\Checkout` | Kelas pambayaran saiki. |

### Wiwit {#since}

- 2.0.0
### Sumber {#source}

Ditentokake ing [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) ing baris 1156
