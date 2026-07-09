---
id: wu_minimum_password_length
title: Salain - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length {#filter-wuminimumpasswordlength}

I-filter ang kinamub-ang gitas-on sa password.

Ipatuman lang kung ang wu_enforce_password_rules kay true.

## Mga Parameter {#parameters}

| Ngalan | Matang | Deskripsyon |
|------|------|-------------|
| $min_length | `int` | Kinamub-ang gitas-on sa password. Default 12 (motakdo sa Defender Pro). |
| $defender_active | `bool` | Kung aktibo ba ang Defender Pro Strong Password. |

### Sukad {#since}

- 2.4.0
### Tinubdan {#source}

Gihubit sa [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) sa linya 543
