---
id: wu_maybe_create_customer
title: Aksi - wu_maybe_create_customer
sidebar_label: wu_maybe_create_customer
_i18n_hash: 15899be650099dafaf0ec1f5095861a6
---
# Aksi: wu_maybe_create_customer

Ngidinan pamekar pangaya ngalakukeun hal tambahan nalika palanggan ditambahkeun.

Contona, di dieu urang nambahkeun hook pikeun nambahkeun customer-&gt;user ka situs utama ogé.

## Parameter {#parameters}

| Ngaran | Tipe | Pedaran |
|------|------|-------------|
| $customer | `\Customer` | Palanggan anu meureun dijieun. |
| $checkout | `\Checkout` | Kelas prosés mayar ayeuna. |

### Ti Saprak {#since}

- 2.0.0
### Sumber {#source}

Ditetepkeun dina [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1156) dina garis 1156
