---
id: wu_enforce_password_rules
title: Filter - wu_enforce_password_rules
sidebar_label: wu_enforce_password_rules
_i18n_hash: bb85ebfcf4a234a043f75de3d07e47ee
---
# Filter: wu_enforce_password_rules

Memfilter apakah aturan kata sandi tambahan harus diterapkan.

Jika diatur ke `true`, filter ini akan menerapkan persyaratan panjang minimum dan karakter. Fitur ini akan aktif secara otomatis jika pengaturan "Super Strong" digunakan atau jika fitur Kata Sandi Kuat dari Defender Pro aktif.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $enforce_rules | `bool` | Apakah aturan tambahan harus diterapkan. |
| $strength_setting | `string` | Nilai pengaturan admin. |
| $defender_active | `bool` | Apakah Kata Sandi Kuat Defender Pro aktif. |

### Since {#since}

- 2.4.0
### Source {#source}

Didefinisikan di [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L531) pada baris 531
