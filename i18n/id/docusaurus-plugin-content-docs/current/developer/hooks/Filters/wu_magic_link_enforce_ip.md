---
id: wu_magic_link_enforce_ip
title: Filter - wu_magic_link_enforce_ip
sidebar_label: wu_magic_link_enforce_ip
_i18n_hash: b785314a6a2d9ea45d3beab38baa58fe
---
# Filter: wu_magic_link_enforce_ip

Memfilter apakah verifikasi alamat IP harus diberlakukan.

Atur ke `false` untuk mengizinkan token berfungsi dari jaringan yang berbeda. Ini mengurangi keamanan tetapi meningkatkan kegunaan (misalnya, untuk pengguna seluler yang berpindah jaringan).

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Apakah pencocokan alamat IP harus diberlakukan. |

### Since

- 2.0.0
### Source

Didefinisikan di [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L422) pada baris 422
