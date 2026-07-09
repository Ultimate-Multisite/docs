---
id: wu_sso_url
title: Filter - wu_sso_url
sidebar_label: wu_sso_url
_i18n_hash: a369dcf0f4cab1f5941c82ac58286155
---
# Filter: wu_sso_url

Memfilter URL SSO yang dihasilkan sebelum dikembalikan untuk tindakan pelanggan lintas-domain.

Gunakan filter ini ketika integrasi perlu menambahkan konteks tepercaya ke tautan SSO sovereign-tenant atau mengganti URL broker sambil mempertahankan validasi token Ultimate Multisite.

## Parameter

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $sso_url | `string` | URL SSO yang dihasilkan. |
| $user | `WP_User` | Pengguna yang akan diautentikasi oleh kunjungan SSO. |
| $site_id | `int` | ID situs target untuk kunjungan tersebut. |
| $redirect_to | `string` | URL tujuan setelah validasi SSO berhasil. |

### Sejak

- 2.13.0

### Sumber

Didefinisikan di `inc/sso/class-sso.php`.


## Mengembalikan

URL SSO yang telah difilter.
