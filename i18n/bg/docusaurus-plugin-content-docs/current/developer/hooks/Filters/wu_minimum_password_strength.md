---
id: wu_minimum_password_strength
title: Филтър - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Филтър: wu_minimum_password_strength

Филтрирайте минималната сила на паролата, която е необходима (score на zxcvbn).

Нивата на сила: - 0, 1: Много слаба - 2: Слаба - 3: Средна - 4: Силна (по подразбиране)

## Параметри

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Минималното изискващо ниво на сила. |
| $strength_setting | `string` | Стойността на настройките на администратора (medium, strong, super_strong). |

### Since

- 2.4.0
### Source

Дефиниран в [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) на линия 516
