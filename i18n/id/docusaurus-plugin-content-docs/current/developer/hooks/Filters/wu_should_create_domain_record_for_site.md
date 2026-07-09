---
id: wu_should_create_domain_record_for_site
title: Filter - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Filter: wu_should_create_domain_record_for_site {#filter-wushouldcreatedomainrecordforsite}

Memfilter apakah Ultimate Multisite harus membuat catatan domain untuk situs yang baru dibuat.

Gunakan filter ini untuk menekan atau menunda pembuatan catatan domain otomatis untuk situs yang menggunakan domain dasar formulir checkout bersama, host internal, atau domain yang akan dikelola secara terpisah oleh integrasi lain.

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $create | `bool` | Apakah catatan domain harus dibuat. |
| $site | `WP_Site` | Objek situs yang baru dibuat. |

### Sejak {#since}

- 2.13.0

### Sumber {#source}

Didefinisikan dalam `inc/functions/domain.php`.


## Mengembalikan {#returns}

Boolean yang menunjukkan apakah catatan domain harus dibuat.
