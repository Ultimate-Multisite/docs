---
id: wu_domain_mapping_register_filters
title: Action - wu_domain_mapping_register_filters
sidebar_label: wu_domain_mapping_register_filters
_i18n_hash: 835b5df60eb33048fe4159fb4243176c
---
# Action: wu_domain_mapping_register_filters

Beberapa plugin mungkin menyimpan URL sebelum pemetaan aktif atau membangun URL dengan cara yang berbeda yang tidak termasuk dalam filter di atas.

Dalam kasus seperti itu, kami ingin menambahkan filter tambahan. Parameter kedua yang dilewatkan adalah *callback* `mangle_url`. Kami tidak merekomendasikan penggunaan filter ini secara langsung. Sebaliknya, gunakan metode `Domain_Mapping::apply_mapping_to_url`.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $mangle_url | `callable` | *Callable* pemetaan. |
| $domain_mapper | `self` | Objek ini. |

### Since {#since}

- 2.0.0
### Source {#source}

Didefinisikan di [`inc/class-domain-mapping.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-domain-mapping.php#L530) pada baris 530
