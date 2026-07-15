---
id: wu_get_checkout_variables
title: Filter - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables

Memungkinkan pengembang plugin untuk memfilter pengaturan awal (pre-sets) dari halaman checkout.

Hati-hati, jika ada kunci (key) yang hilang, ini dapat merusak total proses checkout di sisi depan (front-end).

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $variables | `array` | Variabel terlokalisasi. |
| $checkout | `\Checkout` | Kelas checkout. |

### Since {#since}

- 2.0.0
### Source {#source}

Didefinisikan di [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) pada baris 1970


## Returns {#returns}
Array variabel yang baru.
