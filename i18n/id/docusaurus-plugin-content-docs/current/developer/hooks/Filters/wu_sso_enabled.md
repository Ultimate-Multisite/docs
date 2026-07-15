---
id: wu_sso_enabled
title: Filter - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

Mengaktifkan/menonaktifkan kemampuan single-sign-on (SSO) lintas domain.

Filter ini dapat digunakan untuk mematikan single-sign-on sepenuhnya, atau untuk mengaktifkannya secara bersyarat.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | Apakah SSO harus diaktifkan? Gunakan `true` untuk aktif, dan `false` untuk nonaktif. |

### Since {#since}

- 2.0.11
### Source {#source}

Didefinisikan di [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) pada baris 110


## Returns {#returns}
Nilai apakah SSO diaktifkan atau tidak.
