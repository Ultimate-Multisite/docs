---
id: wu_minimum_password_length
title: Filter - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

Nagfi-filter ito sa minimum na haba ng password.

Ipinapatupad lamang ito kapag ang `wu_enforce_password_rules` ay totoo (true).

## Mga Parameter

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | Minimum na haba ng password. Default na 12 (katulad ng Defender Pro). |
| $defender_active | `bool` | Kung aktibo ba ang Defender Pro Strong Password. |

### Since

- 2.4.0
### Source

Tinutukoy sa [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) sa linya 543
