---
id: wu_minimum_password_strength
title: Филтер - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Филтер: wu_minimum_password_strength

Филтрира минималну јачину лозинке која је потребна (zxcvbn резултат).

Нивои јачине: - 0, 1: Веома слаба - 2: Слаба - 3: Средња - 4: Јака (подразумевано)

## Параметри {#parameters}

| Назив | Тип | Опис |
|------|------|-------------|
| $min_strength | `int` | Минимални потребан ниво јачине. |
| $strength_setting | `string` | Вредност администраторског подешавања (medium, strong, super_strong). |

### Од верзије {#since}

- 2.4.0
### Извор {#source}

Дефинисано у [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) на линији 516
