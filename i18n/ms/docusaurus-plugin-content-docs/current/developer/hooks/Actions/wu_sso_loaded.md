---
id: wu_sso_loaded
title: Tindakan - wu_sso_loaded
sidebar_label: wu_sso_loaded
_i18n_hash: b51fa54f84ebce1962a42dac87fcd923
---
# Action: wu_sso_loaded

Membenarkan pembangun plugin untuk menambah *hook* tambahan, jika diperlukan.

Ini perlu ditangguhkan sehingga ke `init` kerana SSO adalah sesuatu yang berjalan pada *sunrise*.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $sso | `self` | Kelas SSO. |

### Since {#since}

- 2.0.0
### Source {#source}

Didefinisikan dalam [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L285) pada baris 285
