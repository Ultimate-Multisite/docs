---
id: wu_minimum_password_strength
title: Фільтр - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

Фільтруе мінімальную сілу пароля, якая патрабуецца (ацэнка zxcvbn).

Уровні сілы: - 0, 1: Вельмі слабы - 2: Слабы - 3: Сярэдні - 4: Моцны (па спілкуванні)

## Параметры

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Мінімальны павышаны ўзровень сілы, які патрабуецца. |
| $strength_setting | `string` | Значэнне адмін-настаўкі (medium, strong, super_strong). |

### Since

- 2.4.0
### Source

Вызначаны ў [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) на 516-й пакульцы.
