---
id: wu_minimum_password_strength
title: Фильтр - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Фильтр: wu_minimum_password_strength

Фильтрует минимальную требуемую силу пароля (оценка zxcvbn).

Уровни силы: - 0, 1: Очень слабый - 2: Слабый - 3: Средний - 4: Сильный (по умолчанию)

## Параметры

| Имя | Тип | Описание |
|------|------|-------------|
| $min_strength | `int` | Минимальный требуемый уровень силы. |
| $strength_setting | `string` | Значение настройки администратора (medium, strong, super_strong). |

### С версии

- 2.4.0

### Источник

Определено в [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) на строке 516
