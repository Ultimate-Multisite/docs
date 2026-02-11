---
id: wu_minimum_password_length
title: Filter - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

Filter de minimale wachtwoordlengte.

Alleen van toepassing wanneer wu_enforce_password_rules waar is.

## Parameters

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | Minimale wachtwoordlengte. Standaard 12 (komt overeen met Defender Pro). |
| $defender_active | `bool` | Of Defender Pro Strong Password actief is. |

### Since

- 2.4.0

### Source

Gedefinieerd in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) at line 543
