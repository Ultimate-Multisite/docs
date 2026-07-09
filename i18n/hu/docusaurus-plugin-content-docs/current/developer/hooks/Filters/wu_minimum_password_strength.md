---
id: wu_minimum_password_strength
title: Szűrő - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

Szűrőzi a szükséges minimális jelszó erősségét (zxcvbn pontszám).

Erősségi szintek: - 0, 1: Nagyon gyenge - 2: Gyenge - 3: Közepes - 4: Erős (alapértelmezett)

## Paraméterek {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | A szükséges minimális erősségi szint. |
| $strength_setting | `string` | Az admin beállítási érték (medium, strong, super_strong). |

### Since {#since}

- 2.4.0
### Source {#source}

Defined in [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) at line 516
