---
id: wu_minimum_password_length
title: Saringan - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

Filter panjang sandi minimum.

Ngan dilarapkeun lamun wu_enforce_password_rules bener.

## Parameter {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | Panjang sandi minimum. Default 12 (cocog jeung Defender Pro). |
| $defender_active | `bool` | Naha Defender Pro Strong Password aktip. |

### Ti {#since}

- 2.4.0
### Sumber {#source}

Ditetepkeun dina [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) dina garis 543
