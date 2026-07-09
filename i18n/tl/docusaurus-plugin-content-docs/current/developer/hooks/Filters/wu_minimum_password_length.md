---
id: wu_minimum_password_length
title: Filter - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

I-filter ang minimum na haba ng password.

Ipinapatupad lamang kapag true ang wu_enforce_password_rules.

## Mga Parameter

| Pangalan | Uri | Paglalarawan |
|------|------|-------------|
| $min_length | `int` | Minimum na haba ng password. Default 12 (tumutugma sa Defender Pro). |
| $defender_active | `bool` | Kung aktibo ang Defender Pro Strong Password. |

### Mula Noong

- 2.4.0
### Pinagmulan

Tinukoy sa [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) sa linya 543
