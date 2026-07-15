---
id: wu_minimum_password_strength
title: Filtr - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

Filtruje wymagany minimalny poziom siły hasła (wynik zxcvbn).

Poziomy siły: - 0, 1: Bardzo słabe - 2: Słabe - 3: Średnie - 4: Silne (domyślne)

## Parametry {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Minimalny wymagany poziom siły. |
| $strength_setting | `string` | Wartość ustawienia administratora (medium, strong, super_strong). |

### Since {#since}

- 2.4.0
### Source {#source}

Zdefiniowane w [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) w linii 516
