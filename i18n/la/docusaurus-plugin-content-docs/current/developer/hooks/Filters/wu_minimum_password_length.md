---
id: wu_minimum_password_length
title: Filtrum - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filtrum: wu_minimum_password_length {#filter-wuminimumpasswordlength}

Filtra minimam longitudinem tesserae.

Solum cogitur cum wu_enforce_password_rules verum est.

## Parametra {#parameters}

| Nomen | Typus | Descriptio |
|------|------|-------------|
| $min_length | `int` | Minima longitudo tesserae. Praedefinitum 12 (congruit cum Defender Pro). |
| $defender_active | `bool` | Utrum Defender Pro Strong Password activum sit. |

### Ex {#since}

- 2.4.0
### Fons {#source}

Definitum in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) ad lineam 543
