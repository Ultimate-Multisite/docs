---
id: wu_minimum_password_length
title: Filter - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length {#filter-wuminimumpasswordlength}

Menapis panjang minimum kata laluan.

Hanya dikuatkuasakan apabila `wu_enforce_password_rules` adalah `true`.

## Parameters {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | Panjang minimum kata laluan. Lalat 12 (sama dengan Defender Pro). |
| $defender_active | `bool` | Sama ada Defender Pro Strong Password aktif. |

### Since {#since}

- 2.4.0
### Source {#source}

Ditakrifkan dalam [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) pada baris 543
