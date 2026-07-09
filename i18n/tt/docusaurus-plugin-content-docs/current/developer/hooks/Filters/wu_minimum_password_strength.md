---
id: wu_minimum_password_strength
title: Фильтр - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Фильтр: wu_minimum_password_strength

Кирәк булган минималь серсүз ныклыгын фильтрлый (zxcvbn бәясе).

Ныклык дәрәҗәләре: - 0, 1: Бик зәгыйфь - 2: Зәгыйфь - 3: Уртача - 4: Ныклы (килешү буенча)

## Параметрлар

| Исем | Төр | Тасвирлама |
|------|------|-------------|
| $min_strength | `int` | Кирәк булган минималь ныклык дәрәҗәсе. |
| $strength_setting | `string` | Админ көйләмәсе кыйммәте (medium, strong, super_strong). |

### Чыгарылыштан башлап

- 2.4.0
### Чыганак

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) эчендә 516 нчы юлда билгеләнгән.
