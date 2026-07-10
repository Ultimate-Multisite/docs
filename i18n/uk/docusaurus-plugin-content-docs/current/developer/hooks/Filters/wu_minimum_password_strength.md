---
id: wu_minimum_password_strength
title: Фільтр - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength {#filter-wuminimumpasswordstrength}

Фільтрує мінімальну необхідну силу пароля (оцінка zxcvbn).

Рівні складності: - 0, 1: Дуже слабкий - 2: Слабкий - 3: Середній - 4: Сильний (за замовчуванням)

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Мінімальний необхідний рівень складності. |
| $strength_setting | `string` | Значення налаштування адміністратора (medium, strong, super_strong). |

### Since {#since}

- 2.4.0
### Source {#source}

Визначено в [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) у рядку 516
