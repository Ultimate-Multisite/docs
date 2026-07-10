---
id: wu_get_checkout_variables
title: Penapis - wu_get_checkout_variables
sidebar_label: wu_get_checkout_variables
_i18n_hash: c3821432e54f34547822df3b92ced708
---
# Filter: wu_get_checkout_variables {#filter-wugetcheckoutvariables}

Membenarkan pembangun plugin untuk menapis tetapan awal (pre-sets) bagi halaman pembayaran (checkout).

Berhati-hati, jika kunci (keys) hilang, ia boleh merosakkan keseluruhan proses checkout di bahagian hadapan (front-end).

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $variables | `array` | Pemboleh ubah setempat. |
| $checkout | `\Checkout` | Kelas checkout. |

### Sejak {#since}

- 2.0.0
### Sumber {#source}

Didefinisikan dalam [`inc/checkout/class-checkout.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/checkout/class-checkout.php#L1970) pada baris 1970


## Mengembalikan {#returns}
Array pemboleh ubah baharu.
