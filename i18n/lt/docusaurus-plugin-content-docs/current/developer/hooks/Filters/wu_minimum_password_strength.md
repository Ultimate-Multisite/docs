---
id: wu_minimum_password_strength
title: Filtras - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filtras: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

Filtruokite minimalų reikalaujamą slaptažodžio stiprumą (zxcvbn įvertį).

Stiprumo lygiai: - 0, 1: Labai silpnas - 2: Silpnas - 3: Vidutinis - 4: Stiprus (numatytasis)

## Parametrai {#parameters}

| Pavadinimas | Tipas | Aprašymas |
|------|------|-------------|
| $min_strength | `int` | Minimalus reikalaujamas stiprumo lygis. |
| $strength_setting | `string` | Administratoriaus nustatymo reikšmė (vidutinis, stiprus, labai_stiprus). |

### Nuo {#since}

- 2.4.0
### Šaltinis {#source}

Apibrėžta [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) 516 eilutėje
