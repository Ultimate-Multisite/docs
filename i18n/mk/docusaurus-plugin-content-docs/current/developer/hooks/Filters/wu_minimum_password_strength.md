---
id: wu_minimum_password_strength
title: Филтер - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Филтер: wu_minimum_password_strength

Филтрирајте ја минималната потребна јачина на лозинка (zxcvbn резултат).

Нивоа на јачина: - 0, 1: Многу слаба - 2: Слаба - 3: Средна - 4: Силна (стандардно)

## Параметри {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Минималното потребно ниво на јачина. |
| $strength_setting | `string` | Вредноста на администраторската поставка (medium, strong, super_strong). |

### Од {#since}

- 2.4.0
### Извор {#source}

Дефинирано во [`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) на линија 516
