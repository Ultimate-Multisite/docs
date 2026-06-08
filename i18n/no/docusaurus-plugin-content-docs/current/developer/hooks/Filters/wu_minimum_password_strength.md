---
id: wu_minimum_password_strength
title: Filter - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

Filtrerer den nødvendige minimum passordstyrken (zxcvbn-score).

Styrkenivåer: - 0, 1: Veldig svak - 2: Svak - 3: Medium - 4: Sterk (standard)

## Parametere

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Det minste nødvendige styrkenivået. |
| $strength_setting | `string` | Admin-innstillingens verdi (medium, strong, super_strong). |

### Since

- 2.4.0
### Source

Definert i [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) på linje 516
