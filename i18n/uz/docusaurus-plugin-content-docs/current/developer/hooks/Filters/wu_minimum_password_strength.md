---
id: wu_minimum_password_strength
title: Filtr - wu_minimum_password_strength
sidebar_label: wu_minimum_password_strength
_i18n_hash: 13b3e1f6763c2ac8e8393676f5a46039
---
# Filter: wu_minimum_password_strength

Talab qilinadigan minimal parol kuchini filtrlaydi (zxcvbn bahosi).

Kuch darajalari: - 0, 1: Juda zaif - 2: Zaif - 3: O‘rtacha - 4: Kuchli (standart)

## Parametrlar {#parameters}

| Name | Type | Description |
|------|------|-------------|
| $min_strength | `int` | Talab qilinadigan minimal kuch darajasi. |
| $strength_setting | `string` | admin sozlamasi qiymati (medium, strong, super_strong). |

### Versiyadan boshlab {#since}

- 2.4.0
### Manba {#source}

[`inc/class-scripts.php`](https://github.com/Ultimate-Multisite/ultimate-multisite/blob/main/inc/class-scripts.php#L516) faylida 516-qatorda aniqlangan
