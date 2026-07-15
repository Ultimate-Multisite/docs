---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

Filtrer den mindste krævede adgangskodestyrke (zxcvbn-score).

Styrkeniveauer: - 0, 1: Meget svag - 2: Svag - 3: Medium - 4: Stærk (standard)

## Parametre {#parameters}

| Navn | Type | Beskrivelse |
|------|------|-------------|
| $min_strength | `int` | Det mindste krævede styrkeniveau. |
| $strength_setting | `string` | Admin-indstillingsværdien (medium, strong, super_strong). |

### Siden {#since}

- 2.4.0
### Kilde {#source}

Defineret i [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) på linje 516
