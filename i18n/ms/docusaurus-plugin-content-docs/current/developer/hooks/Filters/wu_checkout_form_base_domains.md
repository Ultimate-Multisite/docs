---
id: wu_checkout_form_base_domains
title: Penapis - wu_checkout_form_base_domains
sidebar_label: wu_checkout_form_base_domains
_i18n_hash: 49dcc3fe0fa685304a70aeb9424749fd
---
# Penapis: wu_checkout_form_base_domains

Menapis domain asas borang checkout dikongsi yang tidak sepatutnya menjadi rekod domain dipetakan.

Gunakan penapis ini apabila sesuatu integrasi menyediakan domain asas tambahan untuk medan **URL Laman** borang checkout. Domain yang dikembalikan oleh penapis ini dianggap sebagai hos pendaftaran dikongsi dan bukannya domain tersuai bagi setiap laman.

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $domains | `array` | Domain asas dikongsi yang dikumpulkan daripada konfigurasi borang checkout. |

### Sejak {#since}

- 2.13.0

### Sumber {#source}

Ditakrifkan dalam `inc/functions/domain.php`.


## Mengembalikan {#returns}

Array domain asas borang checkout yang telah dinormalkan.
