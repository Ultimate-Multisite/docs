---
id: wu_minimum_password_strength
title: Filtre - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filtre: wu_minimum_password_strength

Filtra la força mínima de contrasenya requerida (puntuació zxcvbn).

Nivells de força: - 0, 1: Molt feble - 2: Feble - 3: Mitjana - 4: Forta (per defecte)

## Paràmetres {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | El nivell mínim de força requerit. |
| $strength_setting | `string` | El valor de configuració d’admin (medium, strong, super_strong). |

### Des de {#since}

- 2.4.0
### Font {#source}

Definit a [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) a la línia 516
