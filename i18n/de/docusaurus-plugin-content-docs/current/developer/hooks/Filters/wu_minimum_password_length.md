---
id: wu_minimum_password_length
title: Filter - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

Filtert die minimale Passwortlänge.

Nur angewendet, wenn wu_enforce_password_rules true ist.

## Parameters

| Name | Typ | Beschreibung |
|------|------|-------------|
| $min_length | `int` | Minimale Passwortlänge. Standard 12 (entspricht Defender Pro). |
| $defender_active | `bool` | Ob Defender Pro Strong Password aktiv ist. |

### Since

- 2.4.0

### Source

Definiert in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) in Zeile 543
