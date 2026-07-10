---
id: wu_minimum_password_strength
title: Filtër - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

Filtro nivelin minimal të forcës së fjalëkalimit të kërkuar (rezultati zxcvbn).

Nivelet e forcës: - 0, 1: Shumë i dobët - 2: I dobët - 3: Mesatar - 4: I fortë (parazgjedhje)

## Parametrat {#parameters}

| Emri | Lloji | Përshkrimi |
|------|------|-------------|
| $min_strength | `int` | Niveli minimal i forcës së kërkuar. |
| $strength_setting | `string` | Vlera e cilësimit të administratorit (medium, strong, super_strong). |

### Që nga {#since}

- 2.4.0
### Burimi {#source}

Përcaktuar në [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) në rreshtin 516
