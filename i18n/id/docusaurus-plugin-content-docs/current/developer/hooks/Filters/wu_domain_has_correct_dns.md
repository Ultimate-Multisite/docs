---
id: wu_domain_has_correct_dns
title: Filter - wu_domain_has_correct_dns
sidebar_label: wu_domain_has_correct_dns
_i18n_hash: dd6037bea5bd9b5b613888113a04536d
---
# Filter: wu_domain_has_correct_dns

Memungkinkan pengembang plugin untuk menambahkan pemeriksaan baru guna menentukan hasilnya.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $result | `bool` | hasil saat ini. |
| $domain | `self` | Instance domain saat ini. |
| $domains_and_ips | `array` | Daftar domain dan IP yang ditemukan pada pencarian DNS. |

### Sejak

- 2.0.4
### Sumber

Didefinisikan di [`inc/models/class-domain.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/models/class-domain.php#L455) pada baris 455


## Mengembalikan
Status apakah DNS sudah diatur dengan benar atau belum.
