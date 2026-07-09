---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters {#action-wudomainmappingregisterfilters}

Sesetengah plugin akan menyimpan URL sebelum pemetaan ini aktif, atau mereka membina URL dengan cara yang berbeza yang tidak termasuk dalam filter di atas.

Dalam kes seperti itu, kami mahu menambah filter tambahan. Parameter kedua yang dihantar ialah *callback* `mangle_url`. Kami tidak mengesyorkan menggunakan filter ini secara langsung. Sebaliknya, gunakan kaedah `Domain_Mapping::apply_mapping_to_url`.

## Parameter {#parameters}

| Nama | Jenis | Penerangan |
|------|------|-------------|
| $mangle_url | `callable` | *Callback* mangle. |
| $domain_mapper | `self` | Objek ini. |

### Sejak {#since}

- 2.0.0
### Sumber {#source}

Didefinisikan dalam [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) pada baris 530
