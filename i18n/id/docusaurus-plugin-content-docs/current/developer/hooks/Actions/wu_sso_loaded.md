---
id: wu_sso_loaded
title: Aksi - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded {#action-wussoloaded}

Memungkinkan pengembang plugin untuk menambahkan hook tambahan, jika diperlukan.

Ini perlu ditunda hingga `init` karena SSO adalah sesuatu yang berjalan pada `sunrise`.

## Parameter {#parameters}

| Nama | Tipe | Deskripsi |
|------|------|-------------|
| $sso | `self` | Kelas SSO. |

### Sejak {#since}

- 2.0.0
### Sumber {#source}

Didefinisikan di [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) pada baris 285
