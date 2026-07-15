---
id: wu_should_create_domain_record_for_site
title: Penapis - wu_should_create_domain_record_for_site
sidebar_label: wu_should_create_domain_record_for_site
_i18n_hash: d97b52f157228e570818c153e96a609c
---
# Penapis: wu_should_create_domain_record_for_site

Menapis sama ada Ultimate Multisite patut mencipta rekod domain untuk site yang baru dicipta.

Gunakan penapis ini untuk menyekat atau menangguhkan penciptaan rekod domain automatik bagi site yang menggunakan domain asas borang checkout berkongsi, hos dalaman, atau domain yang akan diuruskan secara berasingan oleh integrasi lain.

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $create | `bool` | Sama ada rekod domain patut dicipta. |
| $site | `WP_Site` | Objek site yang baru dicipta. |

### Sejak {#since}

- 2.13.0

### Sumber {#source}

Ditakrifkan dalam `inc/functions/domain.php`.


## Mengembalikan {#returns}

Boolean yang menunjukkan sama ada untuk mencipta rekod domain.
