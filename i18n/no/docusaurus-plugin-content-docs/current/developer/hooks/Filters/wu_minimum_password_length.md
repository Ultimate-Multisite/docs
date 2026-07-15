---
id: wu_minimum_password_length
title: Filter - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filter: wu_minimum_password_length

Filtrerer minimum passordlengde.

Dette blir kun håndhevet når `wu_enforce_password_rules` er satt til `true`.

## Parametere {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $min_length | `int` | Minimum passordlengde. Standard er 12 (samme som Defender Pro). |
| $defender_active | `bool` | Om Defender Pro Strong Password er aktivt. |

### Siden {#since}

- 2.4.0
### Kilde {#source}

Definert i [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) på linje 543
