---
id: wu_minimum_password_strength
title: Lim - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Lim: wu_minimum_password_strength

Lim qhov password strength qis tshaj uas yuav tsum muaj (qhab nia zxcvbn).

Qib strength: - 0, 1: Tsis muaj zog heev - 2: Tsis muaj zog - 3: Nruab nrab - 4: Muaj zog (default)

## Cov parameters

| Npe | Hom | Lus piav qhia |
|------|------|-------------|
| $min_strength | `int` | Qib strength qis tshaj uas yuav tsum muaj. |
| $strength_setting | `string` | Tus nqi admin setting (medium, strong, super_strong). |

### Txij li

- 2.4.0
### Qhov chaw

Txhais nyob rau hauv [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) ntawm kab 516
