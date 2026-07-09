---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

Filtrerar den minsta lösenordsstyrkan som krävs (zxcvbn-poäng).

Styrkningsnivåer: - 0, 1: Mycket svag - 2: Svag - 3: Medel - 4: Stark (standard)

## Parametrar {#parameters}

| Namn | Typ | Beskrivning |
|------|------|-------------|
| $min_strength | `int` | Den minsta styrkenivån som krävs. |
| $strength_setting | `string` | Admin-inställningens värde (medium, strong, super_strong). |

### Sedan {#since}

- 2.4.0
### Källa {#source}

Definieras i [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) på rad 516
