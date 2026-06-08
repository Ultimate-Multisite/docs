---
id: wu_minimum_password_length
title: Szűrő - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

A minimum jelszó hosszának szűrése.

Csak akkor érvényes, ha `wu_enforce_password_rules` igaz.

## Paraméterek

| Name | Type | Description |
|------|------|-------------|
| $min_length | `int` | Minimum jelszó hossza. Alapértelmezett érték 12 (ugyanaz, mint a Defender Pro). |
| $defender_active | `bool` | Az, hogy aktív-e a Defender Pro Strong Password. |

### Since

- 2.4.0
### Source

Definíciója található [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) fájlban, 543-án.
