---
id: wu_minimum_password_strength
title: Fyuluta - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Fyuluta: wu_minimum_password_strength

Fyulutani mphamvu yochepa ya mawu achinsinsi yomwe ikufunika (zxcvbn score).

Milingo ya mphamvu: - 0, 1: Yofooka kwambiri - 2: Yofooka - 3: Yapakatikati - 4: Yamphamvu (yosasintha)

## Ma Parameter

| Dzina | Mtundu | Kufotokozera |
|------|------|-------------|
| $min_strength | `int` | Mlingo wochepa wa mphamvu womwe ukufunika. |
| $strength_setting | `string` | Mtengo wa zochunira za admin (medium, strong, super_strong). |

### Kuyambira

- 2.4.0
### Gwero

Yafotokozedwa mu [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) pa mzere 516
