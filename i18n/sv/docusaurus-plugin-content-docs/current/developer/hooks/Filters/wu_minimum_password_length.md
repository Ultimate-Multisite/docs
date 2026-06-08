---
id: wu_minimum_password_length
title: Filter - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

Filterar minsta lösenordslängden.

Krävs endast när `wu_enforce_password_rules` är sant.

## Parametrar

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $min_length | `int` | Minsta lösenordslängd. Standardvärde 12 (matchar Defender Pro). |
| $defender_active | `bool` | Om Defender Pro Strong Password är aktivt. |

### Sedan

- 2.4.0
### Källa

Definieras i [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) på rad 543
