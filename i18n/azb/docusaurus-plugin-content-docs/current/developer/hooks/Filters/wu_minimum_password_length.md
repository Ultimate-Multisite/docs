---
id: wu_minimum_password_length
title: Filter - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

Mengatur panjang kata sandi minimum.

Hanya berlaku jika `wu_enforce_password_rules` bernilai `true`.

## Parameter

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | Panjang kata sandi minimum. Default 12 (sama dengan Defender Pro). |
| $defender_active | `bool` | Apakah Defender Pro Strong Password aktif. |

### Sejak

- 2.4.0
### Sumber

Didefinisikan di [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) pada baris 543
