---
id: wu_magic_link_enforce_user_agent
title: Filter - wu_magic_link_enforce_user_agent
sidebar_label: wu_magic_link_enforce_user_agent
_i18n_hash: 33252b9660851a8fe51ff7ed586d9cf2
---
# Filter: wu_magic_link_enforce_user_agent

Memfilter apakah verifikasi agen pengguna (user agent) harus diterapkan.

Atur ke `false` untuk memungkinkan token berfungsi di berbagai peramban/perangkat. Ini mengurangi keamanan tetapi meningkatkan kemudahan penggunaan.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce | `bool` | Apakah pencocokan agen pengguna harus diterapkan. |

### Since {#since}

- 2.0.0
### Source {#source}

Didefinisikan di [`inc/sso/class-magic-link.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/sso/class-magic-link.php#L410) pada baris 410
