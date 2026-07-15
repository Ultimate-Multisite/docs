---
id: wu_sso_enabled
title: Penapis - wu_sso_enabled
sidebar_label: wu_sso_enabled
_i18n_hash: 67263dea6df806158e5d4c9bdb984acf
---
# Filter: wu_sso_enabled

Mengaktifkan atau menyahaktifkan keupayaan *single-sign-on* (SSO) merentasi domain.

Gunakan nilai *filter* ini untuk mematikan *single-sign-on* sepenuhnya, atau untuk mengaktifkannya secara bersyarat.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enabled | `bool` | Adakah SSO perlu diaktifkan? Tetapkan kepada `true` untuk hidup, dan `false` untuk mati. |

### Since {#since}

- 2.0.11
### Source {#source}

Didefinisikan dalam [`inc/sso/class-sso.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-sso.php#L110) pada baris 110


## Returns {#returns}
Nilai sama ada SSO diaktifkan atau tidak.
