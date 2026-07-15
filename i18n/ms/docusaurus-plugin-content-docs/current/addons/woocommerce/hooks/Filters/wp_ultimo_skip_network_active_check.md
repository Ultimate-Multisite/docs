---
id: wp_ultimo_skip_network_active_check
title: Penapis - wp_ultimo_skip_network_active_check
sidebar_label: wp_ultimo_skip_network_active_check
_i18n_hash: e2f5feea7c780608ddb520691a69fea8
---
# Filter: wp_ultimo_skip_network_active_check

Membenarkan pembangun untuk memintas pemeriksaan pengaktifan rangkaian.

Ini berguna apabila menggunakan persediaan berasaskan composer dan persediaan tersuai lain, seperti Bedrock, contohnya, di mana menggunakan plugin sebagai mu-plugin adalah perkara biasa.

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $skip_network_activation_check | `bool` | Jika kita patut memintas pemeriksaan ini atau tidak, lalai kepada *false*. |

### Sejak {#since}

- 2.0.0
### Sumber {#source}

Didefinisikan dalam [`inc/class-requirements.php`](https://github.com/Ultimate-Multisite/ultimate-multisite-woocommerce/blob/main/inc/class-requirements.php#L272) pada baris 272


## Mengembalikan {#returns}
*true* jika anda ingin memintas pemeriksaan tersebut, *false* jika tidak.
