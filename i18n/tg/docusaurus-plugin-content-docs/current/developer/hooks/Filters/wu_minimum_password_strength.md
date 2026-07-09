---
id: wu_minimum_password_strength
title: Филтр - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Филтр: wu_minimum_password_strength

Ҳадди ақали қувваи гузарвожаи талабшударо филтр кунед (холи zxcvbn).

Сатҳҳои қувва: - 0, 1: Хеле заиф - 2: Заиф - 3: Миёна - 4: Қавӣ (пешфарз)

## Параметрҳо

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Ҳадди ақали сатҳи қувваи талабшуда. |
| $strength_setting | `string` | Арзиши танзими admin (medium, strong, super_strong). |

### Аз замони

- 2.4.0
### Манбаъ

Дар [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) дар сатри 516 муайян шудааст.
