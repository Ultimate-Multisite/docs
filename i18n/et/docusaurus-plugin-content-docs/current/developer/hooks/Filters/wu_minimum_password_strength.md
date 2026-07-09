---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

Filtreeri nõutavat minimaalset parooli tugevust (zxcvbn skoor).

Tugevustasemed: - 0, 1: Väga nõrk - 2: Nõrk - 3: Keskmine - 4: Tugev (vaikimisi)

## Parameetrid {#parameters}

| Nimi | Tüüp | Kirjeldus |
|------|------|-------------|
| $min_strength | `int` | Nõutav minimaalne tugevustase. |
| $strength_setting | `string` | Administraatori sätte väärtus (medium, strong, super_strong). |

### Alates {#since}

- 2.4.0
### Allikas {#source}

Määratletud failis [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) real 516
