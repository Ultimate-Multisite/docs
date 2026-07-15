---
id: wu_checkout_form_base_domains
title: Filter - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Filter: wu_checkout_form_base_domains

Memfilter domain dasar formulir checkout bersama yang tidak boleh menjadi catatan mapped-domain.

Gunakan filter ini ketika integrasi menyediakan domain dasar tambahan untuk field **Site URL** formulir checkout. Domain yang dikembalikan oleh filter ini diperlakukan sebagai host pendaftaran bersama, bukan domain kustom per situs.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $domains | `array` | Domain dasar bersama yang dikumpulkan dari konfigurasi formulir checkout. |

### Sejak {#since}

- 2.13.0

### Sumber {#source}

Didefinisikan di `inc/functions/domain.php`.


## Mengembalikan {#returns}

Array domain dasar formulir checkout yang telah dinormalisasi.
