---
id: wu_minimum_password_length
title: Filter - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length {#filter-wuminimumpasswordlength}

Filtriraj najmanjšo dolžino gesla.

Uveljavi se samo, ko je wu_enforce_password_rules true.

## Parametri {#parameters}

| Ime | Vrsta | Opis |
|------|------|-------------|
| $min_length | `int` | Najmanjša dolžina gesla. Privzeto 12 (ustreza Defender Pro). |
| $defender_active | `bool` | Ali je Defender Pro Strong Password aktiven. |

### Od različice {#since}

- 2.4.0
### Vir {#source}

Določeno v [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) v vrstici 543
