---
id: wu_minimum_password_length
title: Filtër - wu_minimum_password_length
sidebar_label: wu_minimum_password_length
_i18n_hash: 02317f8ab8200551a9d2112b8ba4b7a8
---
# Filtri: wu_minimum_password_length {#filter-wuminimumpasswordlength}

Filtro gjatësinë minimale të fjalëkalimit.

Zbatohet vetëm kur wu_enforce_password_rules është true.

## Parametrat {#parameters}

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $min_length | `int` | Gjatësia minimale e fjalëkalimit. Parazgjedhja 12 (përputhet me Defender Pro). |
| $defender_active | `bool` | Nëse Fjalëkalimi i Fortë i Defender Pro është aktiv. |

### Që nga {#since}

- 2.4.0
### Burimi {#source}

Përcaktuar në [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L543) në rreshtin 543
